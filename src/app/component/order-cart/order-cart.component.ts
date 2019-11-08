import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit {

  myCart:any[] = [];
  discount = 0;
  shipping = 29;
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
     this.getCartDetails()
  }

  ionViewWillEnter()
  {
    this.getCartDetails()
  }

  getCartDetails()
  {
      this. storage.get('cart').then((val) => {
        if(val != null)
        this.myCart = JSON.parse(val);
      });
  }

  updateitemQty(item,type)
  {
    if(type == 'inc')
    {
      item.qty += 1
    }
    else
    {
      item.qty -= 1
    }

    this.myCart.map((value,index)=>{
      if(value.name == item.name)
      { 
        if(item.qty == 0)
        {
          this.myCart.splice(index,1);
        }
        else
        {
          value.qty = item.qty
        }
      }
    });

    this.storage.set('cart', JSON.stringify(this.myCart));
  }

  calculateMrp()
  {
    var mrp = 0;
    this.myCart.map((value,index)=>{
      mrp += (parseFloat(value.price) * parseFloat(value.qty));
    });

    return mrp;
  }

  redirectionToUrl(urlparams)
  {
    this.router.navigate([urlparams]);
  }



}
