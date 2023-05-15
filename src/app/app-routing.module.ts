import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { EquipmentDetailComponent } from './components/equipment-detail/equipment-detail.component';
import { FoodDetailComponent } from './components/food-detail/food-detail.component';
import { NonFoodDetailComponent } from './components/non-food-detail/non-food-detail.component';
import { MaterialsDetailComponent } from './components/materials-detail/materials-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'monsterDetail/:id', component: MonsterDetailComponent },
  { path: 'equipmentDetail/:id', component: EquipmentDetailComponent },
  { path: 'foodDetail/:id', component: FoodDetailComponent },
  { path: 'nonFoodDetail/:id', component: NonFoodDetailComponent },
  { path: 'materialsDetail/:id', component: MaterialsDetailComponent },


  //This one must be last
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
