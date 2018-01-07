import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public params: any = {};
  public id: string;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
    this.route.queryParams.subscribe(res => {
      this.params = res;
    });
  }

}
