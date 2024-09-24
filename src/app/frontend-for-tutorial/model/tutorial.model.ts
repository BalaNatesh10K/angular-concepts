//This will work as a model object to setup the tutorial data and retrieving the data also

export class Tutorial{
    id?: any;
    title: string;
    description: string;
    published: boolean;

    constructor( id: any, title: string, descrption: string, published: boolean){
        this.id=id;
        this.title=title;
        this.description=descrption;
        this.published=published;
    }
}