import type { SerializedEditorState } from 'lexical';

export type BarberType = {
    id: string;
    name: string;
    description: string;
    about: SerializedEditorState;
    image: { url: string; blurHash?: string };
};
