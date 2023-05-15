import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MonsterListComponent } from './components/monster-list/monster-list.component';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { MaterialsListComponent } from './components/materials-list/materials-list.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { NonFoodListComponent } from './components/non-food-list/non-food-list.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { EquipmentDetailComponent } from './components/equipment-detail/equipment-detail.component';
import { MaterialsDetailComponent } from './components/materials-detail/materials-detail.component';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';
import { NonFoodDetailComponent } from './components/non-food-detail/non-food-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    MonsterListComponent,
    EquipmentListComponent,
    MaterialsListComponent,
    FoodListComponent,
    NonFoodListComponent,
    MonsterDetailComponent,
    EquipmentDetailComponent,
    MaterialsDetailComponent,
    FoodDetailComponent,
    NonFoodDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
