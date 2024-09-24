import { Tutorial } from "./tutorial.model";

export class Comment{
    id: any;
    comment: string;
    // tutorialId: any;
    tutorial: Tutorial;

    constructor(id: any, comment: string){
        this.id=id;
        this.comment=comment;
        // this.tutorialId=tutorialId;
    }
}