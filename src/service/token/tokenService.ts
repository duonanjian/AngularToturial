import { Guid } from "guid-typescript";
import { InjectionToken } from '@angular/core';

export const InjectionToken_Service = new InjectionToken<InjectionTokenService>('TokenService');

export class InjectionTokenService {
  private currentServiceId: string;
  constructor() {
    this.currentServiceId = Guid.raw();
  }
  public get servID(): string {
    return this.currentServiceId;
  }
}
