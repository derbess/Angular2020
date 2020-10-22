import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Albom } from '../../../models/albom.models';
@Component({
  selector: 'app-alboms',
  templateUrl: './alboms.component.html',
  styleUrls: ['./alboms.component.scss']
})
export class AlbomsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  alboms: Albom[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      const { userId } = params;
      this.apiService.getAlboms(Number(userId)).subscribe((alboms) => {
        this.alboms = alboms;
      });
    });
  }

}
