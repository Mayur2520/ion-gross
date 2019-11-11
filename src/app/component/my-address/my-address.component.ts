import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router, NavigationEnd } from '@angular/router';

let options: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {

  currentAddress:String = '';

  constructor(private router: Router, private storage: Storage, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.getCurrentLocation()
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


   redirectTo(url)
   {
      this.router.navigate([url]);
   }

}
