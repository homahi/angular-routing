import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
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
