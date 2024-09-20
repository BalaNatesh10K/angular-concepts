// Model class which we will use as a entity
export class Post{
    constructor(
        public body: string,
        public id: number,
        public title: string,
        public userId: number,
    ){}
}