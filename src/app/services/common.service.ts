import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  add(a: number, b: number) {
    const value = a + b;
    return value;
  }
}
