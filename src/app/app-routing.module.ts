import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "order", component: OrderComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
