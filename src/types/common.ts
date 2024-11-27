export type Filters = {
    type: string;
    [key: string]: any
}

export type Game = {
    id: number;
    label: string;
    type: string;
}

export interface Dream {
    id: number;
    title_mm: string;
    title_en: string;
    num_1: string;
    num_2: string;
    type: string;
    dreamBookId: number;
    created_at: string;
    updated_at: string;
    title_th: string;
    title_zh: string;
}