class Vehicle {

    private id: string;
    private registrationNumber: string;
    private name: string;
    private type: string;
    private available: boolean;

    constructor (id: string, registrationNumber: string, name: string, type: string, available: boolean) {
        this.id = id;
        this.registrationNumber = registrationNumber;
        this.name = name;
        this.type = type;
        this.available = available;
    }


    checkAvailability (available:boolean) {
        if(!available) available == true;
    }
    
}

export default Vehicle;