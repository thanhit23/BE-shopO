const getImageThumbnail = (images) => {
  if (!images) {
    return '';
  }

  if (Array.isArray(images) && images[0]) {
    return images[0];
  }

  return images;
};

module.exports = {
  getImageThumbnail,
};
