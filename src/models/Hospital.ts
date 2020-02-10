class Hospital {
    private id: number;
    private name: string;
    private place: string;
    private zipCode: string

    constructor (id:number, name:string, place:string, zipCode:string) {
        this.id = id;
        this.name = name;
        this.place = place;
        this.zipCode = zipCode
    } 
}

export default Hospital;