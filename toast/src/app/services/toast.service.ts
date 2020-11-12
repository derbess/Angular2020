import { Injectable } from '@angular/core';
import { Toast } from './../models/toast';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  createNewToast(toast: Toast, vertical: String, horizontal: String){
    console.log(toast, vertical, horizontal);
  }
}
