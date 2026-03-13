// Forces HMR update (invalidated for new ring images)


import placeholderImagesJson from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = placeholderImagesJson.placeholderImages;
