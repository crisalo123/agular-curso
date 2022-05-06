import { SelectorContext } from "@angular/compiler";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";




@Component({

 selector: 'app-heroe',
 templateUrl: 'heroe.component.html'

})

export class HeroeComponent{

    nombre : string = 'Ironman';
    edad : number  = 38

  
    

    ObtenerNombre(): string{
  return `${this.nombre} - ${ this.edad }`;

    }



    NombreCapitalizado ():string{

     return `
             ${this.nombre}
     `

    }

    CambiarNombre (): void {
      this.nombre = 'Spiderman';



    }

    CambiarEdad(): void{
     this.edad= 25

    }
  
}