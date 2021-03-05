import { Component, OnInit } from "@angular/core";

import { Passenger } from "src/assets/passengers";
import { PassengerService } from "../passenger.service";

@Component({
  selector: "component-dashboard",
  templateUrl: "./passenger-dashboard.component.html",
  styleUrls: ["./passenger-dashboard.component.css"],
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[] = [];
  public addingNewPassenger: Boolean = false;
  public searchString:string;


  constructor(private passengerService: PassengerService) {}




  cancelAddingPassenger(){
    this.addingNewPassenger=false;
  }
  ngOnInit() {
    this.getPassengers();
  }
  getPassengers(): void {
    this.passengerService.getPassengers().subscribe((passengers) => {
      this.passengers = [...passengers];
      console.log(this.passengers);
    });
  }
  editPassenger(passenger: Passenger) {
    console.log(passenger);
    this.passengerService
      .editPassenger(passenger)
      .subscribe((_) => console.log("test"));
  }

  removePassenger(id: number) {
    this.passengerService
      .deletePassenger(id)
      .subscribe((_) => console.log("test"));
  }

  addNewPassenger() {
    this.addingNewPassenger = true;
  }
  appendPassenger(newPassenger: Passenger) {
    this.passengerService
      .addPassenger(newPassenger)
      .subscribe((newPassenger) => {
        this.passengers.push(newPassenger);
      });
  }
}
