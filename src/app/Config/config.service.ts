import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API_ENDPOINT = '';

  public API_ENDPOINT_NAMES = {
  };

  public VERSION_NUMBER = 'v0.0.0';

  public TOCKEN = {
    keyname: '',
    keyvalue: '',
  };

  constructor() { }
}
