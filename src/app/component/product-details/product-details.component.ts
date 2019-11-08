import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Fruits } from '../../interfaces/fruits';
import { GrossaryService } from '../../services/grossary.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

    
  myCart:any[] = [];
  ProductDetails:any = {};

  slideOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 400
  };
  constructor(private storage: Storage, private router: Router, private route: ActivatedRoute, private _GrossaryService : GrossaryService) { }

 
  ngOnInit() {
    this.getCartDetails()
    this.getProductDetails()
  }


  getProductDetails(){
    var id = this.route.snapshot.paramMap.get("id");
    var container = this.route.snapshot.paramMap.get("container");
        var index = parseInt(id) - 1;
    this.ProductDetails = this._GrossaryService.getProductDetails(index,container);
  }
  getCartDetails()
  {
      this. storage.get('cart').then((val) => {
        if(val != null)
        this.myCart = JSON.parse(val);
      });
  }


  RedirectToCart()
  {
      this.router.navigate(['cart']);
  }

  ExitInCart(item)
 {
   if(this.myCart.length > 0)
   {
    this.myCart.map((value)=>{
        if(value.name == item.name)
          {
            item.qty = value.qty;
            return true
          }
          else{
            return false;
          }
    });
   }
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

  addToCart(item)
  {
    item.qty = 1;
    this.myCart.push(item);
    this.storage.set('cart', JSON.stringify(this.myCart));
  }


}
