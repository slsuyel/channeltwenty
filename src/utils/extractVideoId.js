export const extractVideoId = (url) => {
    let videoId = '';
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
    } else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('youtube.com/watch?v=')[1];
    }
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
};
