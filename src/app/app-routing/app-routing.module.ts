import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PassengerDetails } from "../passengers/components/passenger-details/passenger-details.component";
import { PassengerDashboardComponent } from "../passengers/containers/passenger-dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: PassengerDashboardComponent },
  { path: "details/:id", component: PassengerDetails },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
