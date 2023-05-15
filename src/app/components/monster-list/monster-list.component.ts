import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Monsters } from 'src/app/interfaces/monsters';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent implements OnInit {

  monsterList: MatTableDataSource<Monsters> = new MatTableDataSource()
  monsterLocations: string[] = []
  monsterDrops: string[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getMonsterList()
    this.getMonsterDropList()
  }

  getMonsterList() {
    this.dataService.getAllMonsters().subscribe(monsters => this.monsterList = new MatTableDataSource(monsters))
  }

  getMonsterDropList() {
    this.dataService.getMonsterDropsList().subscribe(dropList => this.monsterDrops = dropList)
  }

  getMonsterLocationsList() {
    this.dataService.getMonsterLocationList().subscribe(locationList => this.monsterLocations = locationList)
  }

  search(input: string) {
    const filter = input.toLowerCase().trim()
    this.monsterList.filter = filter
  }

  searchDrops(drop: string) {}

  searchLocations(location: string) {}

}
