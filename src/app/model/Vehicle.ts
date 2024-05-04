export class Vehicle {
    brand: string;
    model: string;
    year: string;
    plate: string;
    odometer: number;
    purchaseDate: Date;
    purchasePrice: number;
    sold: boolean = false;
    // Usa o ? para ficar como undefined primeiramente, depois ser atribuído um tipo Date no atributo
    saleDate?: Date;
    salePrice: number = 0;

    constructor(brand: string, model: string, year: string, plate: string, odometer: number, purchaseDate: Date, purchasePrice: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
        this.odometer = odometer;
        this.purchaseDate = purchaseDate;
        this.purchasePrice = purchasePrice;
    }

    setSaleDate(saleDate: Date){
        this.saleDate = saleDate;
    }
    
}