export const getVideosByCategory = (data, category) => {
    const categoryObject = data.find(item => item.category_name === category);
    if (categoryObject && categoryObject.category_videos.length > 0) {
        return categoryObject.category_videos;
    } else {
        return [];
    }
};

