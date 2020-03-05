import { Component, OnInit, forwardRef, HostBinding } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder
} from "@angular/forms";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray
} from "@angular/forms";
import * as moment from "moment";
import { TripService } from "src/app/trip.service";

export function checkIfEndDateAfterStartDate(c: AbstractControl): any {
  const startDate = c.get("startDate").value;
  const endDate = c.get("endDate").value;

  if (endDate < startDate) {
    return { endDateInvalid: true };
  }
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;
  startDate = new Date(2020, 0, 1);
  endDate = new Date(2020, 0, 1);
  constructor(private service: TripService) {}

  //  newDestination(): FormGroup {
  //     return this.fb.group({
  //       destination: "",
  //       hotel: ""
  //     });
  //   }

  ngOnInit() {
    this.form = new FormGroup(
      {
        customeLastName: new FormControl("", [
          Validators.required,
          Validators.min(3),
          Validators.max(30)
        ]),
        customeFirstName: new FormControl("", [
          Validators.required,
          Validators.min(3)
        ]),
        startDate: new FormControl(this.startDate),
        endDate: new FormControl(this.endDate),
        destinationsTarget: new FormArray([
          new FormControl("", [Validators.required])
        ])
      },
      {
        validators: checkIfEndDateAfterStartDate
      }
    );
  }

  getOptionReason() {
    const tripOption = this.service.getTripReason();
    return tripOption;
  }

  save() {
    if (this.form.valid) {
      console.log("dsdsdsd");
    }
  }

  //getter
  get destinations(): FormArray {
    return this.form.get("destinations") as FormArray;
  }

  //add destinations
  // addDestinations() {
  //   this.destinations.push(this.newDestination());
  // }

  //remove destinations
  // removeDestinations(i: number) {
  //   this.destinations.removeAt(i);
  // }

  addTargetDestinations() {
    const formArray: FormArray = this.form.controls
      .destinationsTarget as FormArray;
    formArray.push(new FormControl("", [Validators.required]));
  }

  removeDestinationsTarget(index: number) {
    const formArray: FormArray = this.form.controls
      .destinationsTarget as FormArray;
    formArray.removeAt(index);
  }
  // here's a computed value if we don't want to get an error in the initialization
  get destinationsTarget() {
    return this.form
      ? (this.form.controls.destinationsTarget as FormArray).controls
      : [];
  }
}
