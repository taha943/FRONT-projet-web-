import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any
  dict: any
  mail: any
  constructor(private route:Router) { }

  removeConnexion(){

    localStorage.removeItem("user")
    window.location.reload();
    this.route.navigate(['/connexion']);
  }
  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.dict = JSON.parse(this.user)
    this.mail = this.dict["email"].substr(0, this.dict["email"].indexOf('@'))
    console.log("test ", this.mail)
  }

}
