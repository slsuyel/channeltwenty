export const getLabelBySlug = (data, slug) => {
    const item = data.find(item => item.slug === slug);
    return item ? item.label : 'Label not found';
};