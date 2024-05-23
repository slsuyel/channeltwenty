/* eslint-disable react/no-unknown-property */
const Trigger = () => {
    return (
        <div className=" container-fluid" >
            <div className="fs-5 py-1 row text-white" style={{ backgroundColor: "#1e285d" }}>
                <div className="col-md-12">
                    <div
                        className="align-items-center d-flex justify-content-between"

                    >
                        <div
                            className="d-flex flex-fill flex-grow-1 flex-row justify-content-center nav-item-color"

                        >
                            <span className="pe-3">&nbsp;নোটিশ</span>
                        </div>
                        <marquee
                            behavior="scroll"
                            direction="left"
                        >
                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                শিক্ষা প্রতিষ্ঠানের ডায়নামিক ওয়েবসাইট তৈরির পরিপত্র
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                ২০২৩ শিক্ষাবর্ষে সেশন ফি ও শ্রেণী পাঠদান।
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                ঐতিহাসিক ৭ই মার্চ দিবস উদযাপনের বিজ্ঞপ্তি
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                পরীক্ষার   দশম শ্রেণির রুটিন{" "}
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                সৃজনশীল মেধা অন্বেষণ প্রতিযোগিতা
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">

                                ২০২৩ 54 রুটিন নির্বাচনী পরীক্ষার নোটিশ
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                নির্বাচনী পরীক্ষার  ২০২৩ 54 নোটিশ
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                নির্বাচনী পরীক্ষার ফলাফল ২০২৩ পরীক্ষার
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                {" "}
                                ২০২৩ সালের ফলাফল প্রকাশ
                            </a>
                            <span className="red-dot"></span>


                            <a href="#" className="text-white mb-2 p-3 text-decoration-none">
                                বার্ষিক পরীক্ষা-২০২২ এর ফলাফল প্রকাশ
                            </a>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Trigger;