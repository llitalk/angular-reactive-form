import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../app/material/material.module";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { OrderComponent } from "./components/order/order.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TripService } from "../app/trip.service";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    OrderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule {}
