import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Fijo extends Cl_Profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre,bono);
        this._sueldo = sueldo;
    }
   set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    pago() {
        return this.sueldo + this.bono;
    }
}