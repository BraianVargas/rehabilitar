import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor( 
    private token: TokenService,
    private router: Router
    ) {}

  ngOnInit() {
    if (!this.token.getToken()) {
      this.router.navigate([ '/login' ]);
    }
  }

  // ngOnDestroy() {
  //   this.token.logOut();
  // }
}
