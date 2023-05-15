import { Injectable } from '@angular/core';
import { BOTW_DATA } from './data/data';
import { of } from 'rxjs/internal/observable/of';
import { Food } from '../interfaces/food';
import { NonFood } from '../interfaces/non-food';
import { Equipment } from '../interfaces/equipment';
import { Materials } from '../interfaces/materials';
import { Monsters } from '../interfaces/monsters';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFoodItems() {
    return of<Food[]>(BOTW_DATA.creatures.food)
  }

  getNonFoodItems() {
    return of(BOTW_DATA.creatures.non_food as NonFood[])
  }

  getAllEquipment() {
    return of(BOTW_DATA.equipment as Equipment[])
  }

  getAllMaterials() {
    return of(BOTW_DATA.materials as Materials[])
  }

  getAllMonsters() {
    return of(BOTW_DATA.monsters as Monsters[])
  }

  getSingleMonster(id: number) {
    const monster = BOTW_DATA.monsters.find(fi => fi.id === id)

    return of(monster as Monsters)
  }
}
