import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

export type BarberType = {
    id: string;
    name: string;
    description: string;
    about: SerializedEditorState;
    image: { url: string; blurHash?: string };
};
