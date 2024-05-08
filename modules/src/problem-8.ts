{
    class Car{
        public brand: string;
        public model: string;
        public year: number;
        constructor(brand:string, model:string, year:number){
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
       public displayInfo = ():void =>{
            console.log(`"Your car model is: ${this.year} ${this.brand} ${this.model}"`);
        }
        
    }

    let car1 = new Car("Toyota", "Corolla", 2020);
    car1.displayInfo();
}