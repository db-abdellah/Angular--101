import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Child, Passenger } from "src/assets/passengers";

@Component({
  selector: "passenger-forms",
  templateUrl: "./passenger-forms.component.html",
  styleUrls: ["./passenger-forms.component.css"],
})
export class PassengerForms implements OnInit {
  @Output() submit: EventEmitter<Passenger> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  getDateToday():string{
    return (new Date()).toLocaleDateString();
  }
  cancelAddingPassenger(){
    this.cancel.emit();
  }



  cancelAddingChild(){
    this.addingChild=false;
  }
  public newPassenger: Passenger = {} as Passenger;
  addingChild: Boolean = false;

  addChild() {
    this.addingChild = true;
  }
  ngOnInit(): void {
    this.newPassenger.children = [];
  }
  addNewChild(child: Child) {
    this.newPassenger.children.push(child);
    this.addingChild = false;
  }

  submitPassenger() {
    if (this.validateInput()) this.submit.emit(this.newPassenger);
  }
  validateInput(): Boolean {
    if (
      !this.newPassenger.fullName ||
      this.newPassenger.checkedIn == undefined
    ) {
      console.log("input error");
      return false;
    }
    if (this.newPassenger.checkedIn && !this.newPassenger.checkInDate) {
      console.log("date error");
      return false;
    }

    return true;
  }
}
