import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  private _data= new Subject<string>();
  data$ = this._data.asObservable();

  sendData(data:string){
    this._data.next(data);
  }

  constructor() { }
}
