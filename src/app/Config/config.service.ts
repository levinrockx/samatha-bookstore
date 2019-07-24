import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API_ENDPOINT = 'http://10.7.100.220/api';

  public API_ENDPOINT_NAMES = {
    'bookall': "/bookall",
    'addcategory': "/addcategory",
    'addauthor': "/addauthor",
    'addbook': "/addbook",
    'authorall': "/authorall",
    'categoryall': "/categoryall",
  };

  public VERSION_NUMBER = 'v0.0.0';

  public TOCKEN = {
    keyname: '',
    keyvalue: '',
  };

  constructor() { }
}
