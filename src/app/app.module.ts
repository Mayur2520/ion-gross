import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import {PinchZoomModule} from 'ngx-pinch-zoom';

import { MaterialModules } from './module/material-modules';
import { NavigationComponent } from './component/navigation/navigation.component';
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

@NgModule({
  declarations: [AppComponent, NavigationComponent, ProductDetailsComponent, OrderCartComponent,MyAddressComponent,
    OfferZoneComponent,
    OrderHistoryComponent,
    PaymentAndInvoiceComponent,
    ProfileComponent,
    SearchItemComponent,
    ShopListComponent,
    SinginComponent,
    SingupComponent,
    AddAddressComponent,
    CatagoriesComponent,
    ConfirmDiliveryAddressComponent,
    InventoryComponent,
    MealCalenderComponent,
    AboutUsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,IonicStorageModule.forRoot(),FormsModule, MaterialModules, PinchZoomModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeGeocoder, 
    Geolocation,
    AndroidPermissions,
    LocationAccuracy
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
