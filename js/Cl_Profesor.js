export default class Cl_Profesor {
    constructor(nombre, bono) {
        this.nombre = nombre;
        this.bono = bono;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set bono(bono) {
        this._bono = bono;
    }
    get bono() {
        return this._bono;
    }
}