import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  equipmentBeingEdited: string = null;

  constructor() { }

  add(equipmentPiece: string) {
    this.equipment.push(equipmentPiece);
    
  }

  remove(equipmentPiece: string) {
    let index = this.equipment.indexOf(equipmentPiece);
    this.equipment.splice(index, 1);
  }

  edit(equipmentPiece: string) {
    this.equipmentBeingEdited = equipmentPiece;
  }

  save(equipmentPiece: string, oldEquipmentPiece: string) {
    let index: number = this.equipment.indexOf(oldEquipmentPiece);
    this.equipment[index] = equipmentPiece;
    this.equipmentBeingEdited = null;
  }

  ngOnInit() {
  }

}
