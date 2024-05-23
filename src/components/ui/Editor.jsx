import React, { useState, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";

import ImageUploader from "quill-image-uploader";
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);

Quill.register("modules/imageUploader", ImageUploader);
const Editor = () => {
    const [content, setContent] = useState("");

    const handleChange = (html) => {
        console.log(html);
        setContent(html);
    }

    const modules = useMemo(() => ({
        imageResize: {
            parchment: Quill.import('parchment'),
        },
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
        imageUploader: {
            upload: (file) => {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("image", file);

                    fetch(
                        "https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265",
                        {
                            method: "POST",
                            body: formData
                        }
                    )
                        .then(response => response.json())
                        .then(result => {
                            if (result.data && result.data.url) {
                                resolve(result.data.url);
                            } else {
                                reject("Upload failed");
                            }
                        })
                        .catch(error => {
                            reject("Upload failed", error);
                        });
                });
            }
        }
    }), []);

    return (
        <>
            {<div dangerouslySetInnerHTML={{ __html: content }} />}
            <ReactQuill
                onChange={handleChange}
                theme="snow"
                modules={modules}
                value={content}
            />
        </>
    );
};

export default Editor;
