const {Circle} = require("./shapes")

descibe('Circle', () => {
    test('renders', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.shapeColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}">`);
    });
});