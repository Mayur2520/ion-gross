import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruits } from '../interfaces/fruits';
@Injectable({
  providedIn: 'root'
})
export class GrossaryService {

  
  FruitsList:Fruits[] = [
    {name:"Apple",image:"../assets/images/fruits/apple.png",price:50,mrp:65,discount:2},
    {name:"Avocado",image:"../assets/images/fruits/avocado.png",price:120,mrp:130,discount:3},
    {name:"Berry",image:"../assets/images/fruits/berry.png",price:80,mrp:100,discount:5},
    {name:"Coconut",image:"../assets/images/fruits/coconut.png",price:30,mrp:45,discount:4},
    {name:"Kiwi",image:"../assets/images/fruits/kiwi.png",price:45,mrp:60,discount:10},
    {name:"Orange",image:"../assets/images/fruits/orange.png",price:20,mrp:20,discount:0},
    {name:"Pear",image:"../assets/images/fruits/pear.png",price:60,mrp:70,discount:5},
    {name:"Pineapple",image:"../assets/images/fruits/pineapple.png",price:35,mrp:35,discount:0},
    {name:"Raspberry",image:"../assets/images/fruits/raspberry.png",price:110,mrp:130,discount:6},
  ];

  vegitablesList:Fruits[] = [
    {name:"Aubergine",image:"../assets/images/vegitables/aubergine.png",price:30,mrp:35,discount:2},
    {name:"Broccoli",image:"../assets/images/vegitables/broccoli.png",price:40,mrp:50,discount:3},
    {name:"Carrot",image:"../assets/images/vegitables/carrot.png",price:25,mrp:25,discount:0},
    {name:"Cucumber",image:"../assets/images/vegitables/cucumber.png",price:15,mrp:15,discount:0},
    {name:"Garlic",image:"../assets/images/vegitables/garlic.png",price:60,mrp:75,discount:8},
    {name:"Lemon",image:"../assets/images/vegitables/lemon.png",price:5,mrp:6,discount:1},
    {name:"Onion",image:"../assets/images/vegitables/onion.png",price:50,mrp:76,discount:12},
    {name:"Pepper",image:"../assets/images/vegitables/pepper.png",price:45,mrp:50,discount:2},
    {name:"Salad",image:"../assets/images/vegitables/salad.png",price:30,mrp:35,discount:1.5},
    {name:"Tomato",image:"../assets/images/vegitables/tomato.png",price:35,mrp:45,discount:4},
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
