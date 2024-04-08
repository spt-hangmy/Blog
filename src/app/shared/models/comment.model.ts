export interface CommentModel {
    id?: number;
    blog_id?: number;
    content?: string;
    created_at?:Date;
    updated_at?:Date;
    user?: CommentUserModel

}
export interface CommentUserModel {
    id?: number;
    email?: number;
    name?: string;
    avatar?:ImageModel;

}

export interface ImageModel {
    url:string
}