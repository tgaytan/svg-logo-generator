const { Circle, Triangle, Rectangle } = require('../shapes');

describe('Shapes', () => {
    describe('circle', () => {
        it('should render a string that will produce a red circle shape in a svg file', () => {
            const circle = new Circle('red');
            svgString = circle.render();
            expect(svgString).toEqual(`<circle cx="150" cy="100" r="99" fill="red" />`);
        });
    });
    describe('triangle', () => {
        it('should render a string that will produce a red triangle shape in a svg file', () => {
            const triangle = new Triangle('red');
            svgString = triangle.render();
            expect(svgString).toEqual(`<polygon points="0,200 300,200 150,0" fill="red" />`);
        });
    });
    describe('rectangle', () => {
        it('should render a string that will produce a red rectangle shape in a svg file', () => {
            const rectangle = new Rectangle('red');
            svgString = rectangle.render();
            expect(svgString).toEqual(`<rect x="50" y="50" width="200" height="100" fill="red" />`);
        });
    });
});