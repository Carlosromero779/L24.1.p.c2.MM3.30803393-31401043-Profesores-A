import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Contratado extends Cl_Profesor {
    constructor(nombre, bono, cantidadHoras) {
        super(nombre, bono);
        this.cantidadHoras = cantidadHoras;
        
    }
   
  set cantidadHoras(cantidadHoras) {
      this._cantidadHoras = cantidadHoras;
  }
  get cantidadHoras() {
      return this._cantidadHoras;
  }
  sueldo(){
    this.cantidadHoras*10 + this.bono;
 }
 
}