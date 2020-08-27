class Meal {
    name;
    foods; 
    dateModified;
    constructor(name, foods, price) {
        this.name = name;
        this.foods = [];
        this.dateModified = new Date().toISOString();
    }
    addFood(food) {
        this.foods.push(food);
    }
    calculatePrice() {
        let prices = 0;
        for (let i = 0; i < this.foods.length; i++) {
            prices += this.foods[i].price;
        }
        return prices;
    }
    show() {
        console.log(`
         ${this.name}`);
        for (let i = 0; i < this.foods.length; i++) {
            console.log(`
          Món : ${this.foods[i].name}
      `);
        }
        console.log(`Vào lúc  ${this.dateModified}`);
    }
}

class VegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name);
    }
    addFood(vegetableFood) {
        this.foods.push(vegetableFood);
    }
    calculatePrice() {
        let prices = 0;
        for (let i = 0; i < this.foods.length; i++) {
            prices += this.foods[i].price;
        }
        return prices - prices * 0.15;
    }
}
class NonVegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name);
    }
    addFood(nonVegetableFood) {
        this.foods.push(nonVegetableFood);
    }
    calculatePrice() {
        let prices = 0;
        for (let i = 0; i < this.foods.length; i++) {
            prices += this.foods[i].price;
        }
        return prices - prices * 0.05;
    }
}
class Food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}
class VegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}
class NonVegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}
console.log("Example : 1 meal và 5 food");

let a = new VegetableFood("Thit cho", "Hải sồm", 5);
let b = new NonVegetableFood("CHao lòng", "bà 4", 10);
let c = new VegetableFood("bún chả", "obama", 15);
let d = new NonVegetableFood("tiet cabn", "dau ngõ", 20);
let e = new VegetableFood("phở bò", "nam định", 25);

let allMeal = [a, b, c, d, e];

let vegetableMeal = new VegetableMeal("Menu 15%");
let nonVegetableMeal = new NonVegetableMeal("Menu 5%");
//discount 15%
console.log(vegetableMeal.name);
vegetableMeal.addFood(a);
vegetableMeal.addFood(c);
vegetableMeal.addFood(e);
console.log(vegetableMeal.show());
console.log("Discount 15%: ", vegetableMeal.calculatePrice());
//discount 5%
console.log(nonVegetableMeal.name);
nonVegetableMeal.addFood(b);
nonVegetableMeal.addFood(d);
console.log(nonVegetableMeal.show());
console.log("Discount 5%: ", nonVegetableMeal.calculatePrice());