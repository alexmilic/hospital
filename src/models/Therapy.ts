class Therapy {
    private id: number;
    private therapyName: string;
    private therapyStart: boolean;
    private therapyEnd: boolean;

    constructor (id: number, therapyName: string, therapyStart: boolean, therapyEnd: boolean) {
        this.id = id;
        this.therapyName = therapyName;
        this.therapyStart = therapyStart;
        this.therapyEnd = therapyEnd;
    }
}

export default Therapy;