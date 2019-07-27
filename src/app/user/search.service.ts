import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public seachKeyword = new BehaviorSubject('');
  constructor() { }

  setSearchKeyWord(keyword) {
    this.seachKeyword.next(keyword);
  }

  getSearchKeyWord() {
    return this.seachKeyword;
  }
}
