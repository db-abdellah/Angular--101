import { Component, Input } from "@angular/core";
import { Passenger, passengers } from "src/assets/passengers";
@Component({
  selector: "passenger-counter",
  templateUrl:"./passenger-count.component.html" ,
  styleUrls:["./passenger-count.component.css"]
})
export class PassengerCountComponent {
  @Input() items: Passenger[];

  countPassenger(): number {
    return this.items.filter((passenger) => passenger.checkedIn).length;
  }
}
