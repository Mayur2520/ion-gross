import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModules } from '../module/material-modules';
import { HomePage } from './home.page';
import { CatagoriesComponent } from '../component/catagories/catagories.component';
import { SearchItemComponent } from '../component/search-item/search-item.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MaterialModules
  ],
  entryComponents: [],
  declarations: [HomePage]
})
export class HomePageModule {}
