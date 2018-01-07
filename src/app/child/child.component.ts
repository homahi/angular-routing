import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public message:string;
  public params: any = {};
  public id: string;
  public fragment: string;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.message = data['message'];
    });
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
    this.route.queryParams.subscribe(res => {
      this.params = res;
    });
    this.route.fragment.subscribe(res => {
      this.fragment = res;
      const target = document.getElementById(res);
      if (target) {
        target.scrollIntoView();
      }
    });
  }

}
