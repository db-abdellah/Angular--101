import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

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
  private passengerSubscriptions: Subscription;

  constructor(private passengerService: PassengerService) {}

  cancelAddingPassenger() {
    this.addingNewPassenger = false;
  }
  ngOnInit() {
    this.getPassengers();
  }
  getPassengers(): void {
    this.passengerSubscriptions = this.passengerService
      .getPassengers()
      .subscribe((passengers) => {
        this.passengers = [...passengers];
        console.log(this.passengers);
      });
  }
  editPassenger(passenger: Passenger) {
    console.log(passenger);

    this.passengerSubscriptions = this.passengerService
      .editPassenger(passenger)
      .subscribe((_) => console.log("test"));
  }

  removePassenger(id: number) {
    this.passengerSubscriptions = this.passengerService
      .deletePassenger(id)
      .subscribe(p=>{
        this.passengers=this.passengers.filter(passenger=>passenger.id!=id)
      });
  }

  addNewPassenger() {
    this.addingNewPassenger = true;
  }
  appendPassenger(newPassenger: Passenger) {
    this.passengerSubscriptions = this.passengerService
      .addPassenger(newPassenger)
      .subscribe((newPassenger) => {
        this.passengers.push(newPassenger);
      });
  }

  ngOnDestroy() {
    this.passengerSubscriptions.unsubscribe();
  }
}
