import { Component, OnInit, Input } from '@angular/core';
import { location } from 'src/app/models/toast';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input()
  toast: location;
  style: { [key: string]: any } = {};
  constructor(private toastService: ToastService) { }

  ngOnInit(): void {

    this.style.left = this.toast.x;
    this.style.top = this.toast.y;
    this.toastService.toasts$.subscribe(data => {
      this.style.x = this.toast.x;
      this.style.y = this.toast.y;
    });
  }
  deleteToast() {
    this.toastService.deleteToast(this.toast.index);
  }
}
