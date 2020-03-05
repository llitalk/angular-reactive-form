import { Injectable } from "@angular/core";
import { TRIPREASON } from "../app/tripReason";
@Injectable({
  providedIn: "root"
})
export class TripService {
  constructor() {}

  getTripReason(): any[] {
    return TRIPREASON;
  }
}
