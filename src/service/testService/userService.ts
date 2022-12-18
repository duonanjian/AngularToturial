import { Injectable } from "@angular/core";

@Injectable()

export class UserService {
  a = 'UserService'
  constructor() {
    console.log('UserService')
  }
}