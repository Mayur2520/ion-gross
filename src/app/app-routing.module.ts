import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { OrderCartComponent } from './component/order-cart/order-cart.component';
import { MyAddressComponent } from './component/my-address/my-address.component';
import { OfferZoneComponent } from './component/offer-zone/offer-zone.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';
import { PaymentAndInvoiceComponent } from './component/payment-and-invoice/payment-and-invoice.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SearchItemComponent } from './component/search-item/search-item.component';
import { ShopListComponent } from './component/shop-list/shop-list.component';
import { SinginComponent } from './component/singin/singin.component';
import { SingupComponent } from './component/singup/singup.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { CatagoriesComponent } from './component/catagories/catagories.component';
import { ConfirmDiliveryAddressComponent } from './component/confirm-dilivery-address/confirm-dilivery-address.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { MealCalenderComponent } from './component/meal-calender/meal-calender.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'productdetails/:id/:container', component: ProductDetailsComponent},
  { path: 'cart', component: OrderCartComponent},
  { path: 'my_address', component: MyAddressComponent},
  { path: 'add_address', component: AddAddressComponent},
  { path: 'offers', component: OfferZoneComponent},
  { path: 'order_history', component: OrderHistoryComponent},
  { path: 'payment', component: PaymentAndInvoiceComponent},
  { path: 'shops', component: ShopListComponent},
  { path: 'confirm_address', component: ConfirmDiliveryAddressComponent},
  { path: 'catagories', component: CatagoriesComponent},
  { path: 'signin', component: SinginComponent},
  { path: 'signup', component: SingupComponent},
  { path: 'search_item', component: SearchItemComponent},
  { path: 'aboutus', component: AboutUsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
