import {Comment} from "./comment"

export class Moment {
    author: string;
    avatar: string;
    time: string;
    image: string;
    content: string;
    likes: string[];
    comments: Comment[];
}