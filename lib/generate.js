const { Circle, Triangle, Rectangle } = require('./lib/shapes');

const generateShapeEl = (shape, shapeColor) => {
    let logoShape;
    switch(shape) {
        case "circle":
            logoShape = new Circle(shapeColor);
            break;
        case "rectangle":
            logoShape = new Rectangle(shapeColor);
            break;
        case "triangle":
            logoShape = new Triangle(shapeColor);
            break;
    }

    return logoShape.render();
}

const generateSvg = ({ text, textColor, shape, shapeColor }) => {
    console.log(generateShapeEl(shape, shapeColor));   
};

module.exports = generateSvg;