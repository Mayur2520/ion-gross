import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';


let options: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};

export interface MenuItems {
  name: string;
  icon: string;
  url:string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  currentAddress:String = '';
  MenuItems: MenuItems[] = [
    {name:"Login",icon:"person",url:'/signin'},
    {name:"Home",icon:"home",url:'/home'},
    {name:"Offers",icon:"local_offer",url:'/offers'},
    {name:"My Addresses",icon:"my_location",url:'/addresses'},
    {name:"My Orders",icon:"history",url:'/order_history'},
    {name:"My Cart",icon:"shopping_cart",url:'/cart'},
  ];

  OtherMenuItems: MenuItems[] = [
    {name:"Customer Support",icon:"call",url:'/support'},
    {name:"Rate Us",icon:"stars",url:''},
    {name:"Share",icon:"share",url:''},
    {name:"About Us",icon:"info",url:'/aboutus'},
    {name:"Logout",icon:"exit_to_app",url:''},
  ];
  constructor(private router: Router, private storage: Storage, private menuCtrl: MenuController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, private androidPermissions: AndroidPermissions,private locationAccuracy: LocationAccuracy) { }

  selectedTheme: String;
  ngOnInit() {
    this.checkGPSPermission();
  
  }


  //Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
 
          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
 
          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }
 
  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }
 
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getCurrentLocation()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }



  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
    .then((result: NativeGeocoderResult[]) => {
      // alert(JSON.stringify(result[0])); 

      //result[0].areasOfInterest[0]+', '+
      this.currentAddress +=  result[0].subLocality+', '+ result[0].locality+', '+ result[0].subAdministrativeArea+', '+ result[0].administrativeArea+', '+ result[0].postalCode+', '+ result[0].countryName+'.';
      this.currentAddress = this.currentAddress.replace(/' ,'/g, '');
    })
    .catch((error: any) => console.log(error));
  
     }).catch((error) => {
      //  alert('Error getting location'+JSON.stringify(error));
     });
   }
  



  redirectionToUrl(urlparams)
  {
    this.router.navigate([urlparams]);
    this.menuCtrl.toggle();
  }



}
