export class Vehicle {
    id: number = 0;
    brand: string = "";
    model: string = "";
    year: string = "";
    plate: string = "";
    odometer: number = 0;
    purchaseDate?: Date;
    purchasePrice?: number;
    sold: boolean = false;
    // Usa o ? para ficar como undefined primeiramente, depois ser atribuído um tipo Date no atributo
    saleDate?: Date;
    salePrice: number = 0;
    fipe: number = 0;
    userId: number = -1;

    constructor(){}

    setSaleDate(saleDate: Date){
        this.saleDate = saleDate;
    }
    
}