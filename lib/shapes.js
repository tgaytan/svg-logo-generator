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
        return `<${this.shape} cx="150" cy="100" r="99" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.shape = 'triangle';
    }

    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
}

class Rectangle extends Shape {
    constructor(color) {
        super(color);
        this.shape = 'rect';
    }

    render() {
        return `<${this.shape} x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Rectangle
}