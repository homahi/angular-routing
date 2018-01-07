import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import {Observable} from 'rxjs/observable';
@Injectable()
export class ChildResolverService {

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve('3000ms待ちました');
      }, 3000);
    });
  }

}
