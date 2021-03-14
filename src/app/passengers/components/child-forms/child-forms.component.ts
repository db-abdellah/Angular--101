import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Child } from "src/assets/passengers";

@Component({
  selector: "child-forms",
  templateUrl: "./child-forms.component.html",
  styleUrls: ["./child-forms.component.css"],
})
export class ChildForms implements OnInit {
  @Output() submitEvent: EventEmitter<Child> = new EventEmitter();
  @Output() cancel:EventEmitter<any> =new EventEmitter(); 

  cancelAddingChild(){
    this.cancel.emit();
  }
  public child: Child = {} as Child  ;
  // submitChild() {
  //   if (this.validateInput()) {
  //     this.submit.emit(this.child);
  //     console.log(this.child);
  //   }
  // }
  ngOnInit(): void {}
  submit(child:Child) {
   
    this.submitEvent.emit(child);
  }

  validateInput(): Boolean {
    if (!this.child.name || !this.child.age) {
      console.log("input error");
      return false;
    }
    return true;
  }
}
    