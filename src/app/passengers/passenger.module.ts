import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { PassengerService } from "./passenger.service";
import { PassengerForms } from "./components/passenger-forms/passenger-forms.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ChildForms } from "./components/child-forms/child-forms.component";
import { PassengerDetails } from "./components/passenger-details/passenger-details.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerListComponent,
    PassengerForms,
    ChildForms,
    PassengerDetails,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule,FormsModule],
  providers: [PassengerService],
  exports: [PassengerDashboardComponent,PassengerDetails],
})
export class PassengersModule {}
