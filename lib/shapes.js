class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
        this.shape = 'circle';
    }

    render() {
        return `<${this.shape} cx="150" cy="100" r="80" fill="${color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.shape = 'triangle';
    }

    render() {
        return `<polygon points="67,130 237,130 152,10" fill="${this.color}" />`;
    }
}

class Rectangle extends Shape {
    constructor(color) {
        super(color);
        this.shape = 'rectangle';
    }

    render() {
        return `<${this.shape} x="90" y="73" width="120" height="60" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Rectangle
}