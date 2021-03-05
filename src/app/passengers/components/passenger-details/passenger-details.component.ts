import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Passenger } from "src/assets/passengers";
import { PassengerService } from "../../passenger.service";
import { Location } from '@angular/common';

@Component({
  selector: "passenger-details",
  templateUrl: "./passenger-details.component.html",
  styleUrls: ["./passenger-details.component.css"],
})
export class PassengerDetails implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private passengerService: PassengerService
  ) {}
  ngOnInit(): void {
    this.getPassenger();
  }
  public passenger: Passenger;
  getPassenger(): void {
    const id =+this.route.snapshot.paramMap.get('id');;
    this.passengerService
      .getPassengerById(id)
      .subscribe((passenger) => (this.passenger = passenger));
  }

  goBack():void{
      this.location.back();
  }
}
