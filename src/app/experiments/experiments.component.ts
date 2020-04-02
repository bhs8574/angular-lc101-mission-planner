import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  experimentBeingEdited: string = null;
  
  constructor() { }

  add(newExperiment: string) {
    this.experiments.push(newExperiment);
    
  }

  remove(oldExperiment: string) {
    let index = this.experiments.indexOf(oldExperiment);
    this.experiments.splice(index, 1);
  }

  edit(changedExperiment: string) {
    this.experimentBeingEdited = changedExperiment;
  }

  save(changedExperiment: string, oldExperiment: string) {
    let index: number = this.experiments.indexOf(oldExperiment);
    this.experiments[index] = changedExperiment;
    this.experimentBeingEdited = null;
  }

  ngOnInit() {
  }

}
