function parseCount(ner) {
    if (isNaN(Number.parseFloat(ner)) === true) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(ner);
}

function validateCount(a) {
    try {
        parseCount(a);
    } catch (error) {
        console.log(error);
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
    area() {
        let p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        ner = new Triangle(a, b, c);
        ner.area();
        ner.perimeter();
    } catch (error) {
        console.log(error);
        console.log("Ошибка! Треугольник не существует");
    }
}