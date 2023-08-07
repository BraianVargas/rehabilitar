import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor( 
    private token: TokenService,
    private router: Router,
    private loginService: LoginService
    ) {
      // window.location.href = '/';
      // window.location.replace('/');
    }

  ngOnInit() {
    // if (!this.token.getToken()) {
    //   this.router.navigate([ '/login' ]);
    // }
    // console.log(this.loginService.isLogged);
    // this.router.navigate([ '/' ]);
    
    // if (!this.loginService.isLogged) {
    //   this.token.logOut();
    //   this.router.navigate([ '' ]);
    // }
  }
}
