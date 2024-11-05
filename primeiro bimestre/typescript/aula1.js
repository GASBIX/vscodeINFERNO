var Circulo = /** @class */ (function () {
    function Circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    Circulo.prototype.mover = function (x, y) {
        this.x += x;
        this.y += y;
    };
    Circulo.prototype.aumentar = function (r) {
        this.raio += r;
    };
    Circulo.prototype.exibir = function () {
        return "Raio: " + this.raio + ", X: " + this.x + ", Y: " + this.y;
    };
    return Circulo;
}());
var circulo1 = new Circulo(2, 0, 0);
var circulo2 = new Circulo(3, 5, 2);
console.log(circulo1.exibir());
console.log(circulo2.exibir());
