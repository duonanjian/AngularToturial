import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalID: string;
  constructor() {
    this.modalID = UUID.UUID();
  }
  public get ID(): string {
    return this.modalID;
  }
  say() {
    console.log(this.modalID);
  }
}
