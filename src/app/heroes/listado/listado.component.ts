import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent   {

heroes: string [] = ['spiderman','Iroman', 'hulk', 'thor', 'batman' , 'yanke', 'superman  '];
heroeborrado: string = '';
 
animales :string [] = ['perro','gato','leon','jirafa   '];



  borrarHeroe () {

  this.heroeborrado =  this.heroes.shift() || "";


}



}




