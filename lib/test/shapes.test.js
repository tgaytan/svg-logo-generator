const { Circle, Triangle, Rectangle } = require('../shapes');

describe('Shapes', () => {
    describe('circle', () => {
        it('should render a string that will produce a red circle shape in a svg file', () => {
            const circle = new Circle('red');
            svgString = circle.render();
            expect(svgString).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
        });
    });
    describe('triangle', () => {
        it('should render a string that will produce a red triangle shape in a svg file', () => {
            const triangle = new Triangle('red');
            svgString = triangle.render();
            expect(svgString).toEqual(`<polygon points="67,130 237,130 152,10" fill="red" />`);
        });
    });
    describe('rectangle', () => {
        it('should render a string that will produce a red rectangle shape in a svg file', () => {
            const rectangle = new Rectangle('red');
            svgString = rectangle.render();
            expect(svgString).toEqual(`<rect x="90" y="73" width="120" height="60" fill="red" />`);
        });
    });
});