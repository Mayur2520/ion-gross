import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruits } from '../interfaces/fruits';
@Injectable({
  providedIn: 'root'
})
export class GrossaryService {

  
  FruitsList:Fruits[] = [
    {name:"Apple",image:"../assets/images/fruits/apple.png",price:50},
    {name:"Avocado",image:"../assets/images/fruits/avocado.png",price:120},
    {name:"Berry",image:"../assets/images/fruits/berry.png",price:80},
    {name:"Coconut",image:"../assets/images/fruits/coconut.png",price:30},
    {name:"Kiwi",image:"../assets/images/fruits/kiwi.png",price:45},
    {name:"Orange",image:"../assets/images/fruits/orange.png",price:20},
    {name:"Pear",image:"../assets/images/fruits/pear.png",price:60},
    {name:"Pineapple",image:"../assets/images/fruits/pineapple.png",price:35},
    {name:"Raspberry",image:"../assets/images/fruits/raspberry.png",price:110},
  ];

  vegitablesList:Fruits[] = [
    {name:"Aubergine",image:"../assets/images/vegitables/aubergine.png",price:30},
    {name:"Broccoli",image:"../assets/images/vegitables/broccoli.png",price:40},
    {name:"Carrot",image:"../assets/images/vegitables/carrot.png",price:25},
    {name:"Cucumber",image:"../assets/images/vegitables/cucumber.png",price:15},
    {name:"Garlic",image:"../assets/images/vegitables/garlic.png",price:60},
    {name:"Lemon",image:"../assets/images/vegitables/lemon.png",price:5},
    {name:"Onion",image:"../assets/images/vegitables/onion.png",price:50},
    {name:"Pepper",image:"../assets/images/vegitables/pepper.png",price:45},
    {name:"Salad",image:"../assets/images/vegitables/salad.png",price:30},
    {name:"Tomato",image:"../assets/images/vegitables/tomato.png",price:35},
  ];


  constructor() { }

  
  getFruitsList(): Fruits[] {
    return this.FruitsList;
  }

getVegitablesList(): Fruits[] {
    return this.vegitablesList;
}

getProductDetails(id,container): Fruits[] {
    return eval('this.'+container+'['+id+']');
}

getProductsList(container): Fruits[] {
    return eval('this.'+container);
}


}
