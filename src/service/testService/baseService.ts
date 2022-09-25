import { Injectable } from "@angular/core";

@Injectable()

export class BaseService {
  a = 'BaseService'
  constructor() {
    console.log('BaseService')
  }
}