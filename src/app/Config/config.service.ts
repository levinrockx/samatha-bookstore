import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API_ENDPOINT = 'http://10.7.100.220/api';

  public API_ENDPOINT_NAMES = {
    'book': "/book",
    'category': "/category",
    'addcategory': "/addcategory",
    'addbook': "/addbook",
    'addauthor': "/addauthor",
    'addbookimage': "/addbookimage",
    'bookall': "/bookall",
    'authorall': "/authorall",
    'categoryall': "/categoryall",
    'editauthor': "/editauthor",
    'editbook': "/editbook",
    'editcategory': "/editcategory",
    'deletecategory': "/deletecategory",
    'deleteauthor': "/deleteauthor",
    'deletebook': "/deletebook",
  };

  public VERSION_NUMBER = 'v0.0.0';

  public TOCKEN = {
    keyname: '',
    keyvalue: '',
  };

  constructor() { }
}
