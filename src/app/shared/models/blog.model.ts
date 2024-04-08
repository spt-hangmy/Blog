export interface BlogModel {
    id?: number;
    title?: string;
    content?: string;
    comments_count?: number;
    image?:ImageModel;
    created_at?:Date;
    updated_at?:Date;
}
export interface ImageModel {
    url:string
}