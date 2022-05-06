 
 
 import { Component} from '@angular/core';



 @Component({
     selector:'app-contador',
     template:  ` 

<section id="section1">
  <div class="container ">
    <div class="row d-flex  my-5"> 
      <div class="card pb-2 py-2 col-md-6" >
        <div class="card-head">
        <h2 class="text-center">Login</h2>
        </div>
        <input class="form-control text-center mb-3" type="nombre" placeholder="Ingrese su Nombre">
        <input class="form-control text-center" type="password" placeholder="Ingrese su Clave">
        <button class="btn btn-primary my-3" id="btn" type="submit" >Ingresar</button>
      </div>

      <div class="col-md-6" >
        
        <h2 class="text-center">Sistema de votacion </h2>
        <p class="text-center">Colegio Gustavo Restrepo</p>
        </div>
        

      </div>
    </div>
</section>

<section id="section2"  style="display: none;">
  <div class="container justify-content-center">
    <div class="row text-center">
      <h2 class="my-5">Candindatos a personeria</h2>
      <div class="col-md-2 col-xs-6 my-3 card mx-2 shadow" type="button">
        
        <img src="https://www.promotec.com.co/mailtemplate/images/soatley/segundo_vehiculo.png" alt="carro">
        
        <h2>{{ 2+ 0 }}</h2>
        <p class="text-primary">PETRO</p>
      </div>
      <div class="col-md-2 col-xs-6 my-3 card mx-2 shadow" >
        <img src="https://www.promotec.com.co/mailtemplate/images/soatley/segundo_vehiculo.png" alt="carro">
        <h2>{{ 2+ 2 }}</h2>
        <p (click)="numero" >DUQUE</p>
      </div>
      <div class="col-md-2  col-xs-6 my-3 card mx-2 shadow">
        <img src="https://www.promotec.com.co/mailtemplate/images/soatley/segundo_vehiculo.png" alt="carro">
        
        <h3>{{  2+ 4 }}</h3>
        <P (click)="numero">ALVARO URIBE</P>
        
      </div>
   
    </div>
    <div class="row">
      <div class="col-md-12 text-center my-5">
        <p>Resultados de las encuentas 2022</p>
        <table class="table  table-hover">
         <thead>
         <th>Candidato </th>
         <th>Resultado</th>

         </thead>
         <tbody>
         <tr>
           <td>Gustavo Petro</td>
           <td>1002</td>
         </tr>
         <tr>
          <td>Duque </td>
          <td>102</td>
         </tr>
         <tr>
          <td>Alvar</td>
          <td>500</td>
         </tr>
         </tbody>


        </table>
      
      </div>

    </div>

  </div>

  
</section>


     `
      

 })
 
 
 
 
 export  class ContadorComponent{

    title : string= 'bases';
    numero :number =10;
  
    acumular (valor:number){
  
      this.numero   += valor; 
    }
  


}