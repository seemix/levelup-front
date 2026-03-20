export type MediaImage = {
    id: string;
    createdAt: string;
    updatedAt: string;
    alt: string;
    url: string;
    blurHash?: string;
    filename: string;
    thumbnailURL: string | null;
};

export type Slide = {
    id: string;
    createdAt: string;
    updatedAt: string;
    image: MediaImage;
};
