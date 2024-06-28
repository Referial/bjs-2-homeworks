function parseCount(ner) {
    let x = Number.parseFloat(ner);
    if (isNaN(x)) {
        throw new Error("Невалидное значение");
    }
    return x;
}

function validateCount(a) {
    try {
        return parseCount(a);
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = (this.a + this.b + this.c) / 2;
        let x = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return Number(x);
    }
}

function getTriangle(a, b, c) {
    
    try {
        return new Triangle(a, b, c);

        
    } catch (error) {
        console.log(error);
        console.log(notTriangle.perimeter());
        console.log(notTriangle.area());
    }
}

let notTriangle = {
    get perimeter() {
        return 'Ошибка! Треугольник не существует';
    },

    get area() {
        return 'Ошибка! Треугольник не существует';
    }
};