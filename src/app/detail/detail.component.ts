import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public title: string
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.title = data['title'];
    });
  }

  onClick() {
    let extras: NavigationExtras = {
      queryParams: {
        name: 'taro'
      }
    }
    this.route.navigate(['/detail', 1], extras);
  };

}
