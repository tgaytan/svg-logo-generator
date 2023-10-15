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
    svgEl = generateShapeEl(shape, shapeColor);

    return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${svgEl}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
`;
};

module.exports = generateSvg;