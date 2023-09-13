import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // iamSingle: boolean = true;
  
  
  // imgUrl: string= "https://imgd.aeplcdn.com/1280x720/n/cw/ec/97549/apache-rtr-160-4v-right-front-three-quarter-4.jpeg?isig=0&q=80";
  
  // language: string[] = [];
  // clSpan: number = 5;
  // constructor(navlang:LanguageService) {
  //   this.language = navlang.getLanguages();
  // }
  // showAlert() {
  //   alert('Hi this is naveen i have successfully excuted that component...#');
  // }
  // title: string ='HI This is my first angular application';
  // dateofBirth = new Date(2001,6,30);
  // salary: number = 200000;
  topic: string = 'Authentication & Authorization';

  constructor(private router: Router, public authService: AuthService) {

  }
    logout() {
      localStorage.clear();
      this.router.navigate(['/home']);
    }
  //menuItem: string='';

  // changeMenu(item: string) {
  //   this.menuItem = item;
  // }
}
