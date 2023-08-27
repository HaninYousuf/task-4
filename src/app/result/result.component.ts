import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  // selectedOptions: string[] = [];

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     if (params['results']) {
  //       this.selectedOptions = params['results'];
  //     }
  //   });
  // }

  selectedOptions: string[] = [];
  score: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['results']) {
        this.selectedOptions = params['results'];
      }
      if (params['score']) {
        this.score = Number(params['score']);
      }
    });
  }
}
