import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  completedTours=["Rome","switzerland"];
  selectedTour  :String;
  getselectedTour(){
    this.selectedTour;
  }
  setselectedTour(tour){
    this.selectedTour = tour;
  }


  getcompletedTours(){
    return this.completedTours;
  }

  constructor() { }

  ngOnInit() {
  }

}
