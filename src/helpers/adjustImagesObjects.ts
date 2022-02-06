type Assets = [
  {
    asset: [
      {
        id: string;
        url: string;
      }
    ];
  }
];

const adjustImagesObjects = (assets: Assets) => {
  const images: { original: string }[] = [];
  if (assets) {
    assets.forEach(({ asset }) => {
      asset.forEach(({ url }) => {
        images.push({ original: url });
      });
    });
  }
  return images;
};

export default adjustImagesObjects;
