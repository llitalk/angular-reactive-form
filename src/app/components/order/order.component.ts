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
  startDate = new Date(2020, 0, 1);
  endDate = new Date(2020, 0, 1);
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
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
        destinations: this.fb.array([])
      },
      {
        validators: checkIfEndDateAfterStartDate
      }
    );
  }

  newDestination(): FormGroup {
    return this.fb.group({
      destination: "",
      hotel: ""
    });
  }

  ngOnInit() {}

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
  addDestinations() {
    this.destinations.push(this.newDestination());
  }

  //remove destinations
  removeDestinations(i: number) {
    this.destinations.removeAt(i);
  }
}
