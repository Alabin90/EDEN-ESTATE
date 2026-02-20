import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterLink, ],
  selector: 'app-Navbar-component',
  templateUrl: './Navbar-component.component.html',
  styleUrls: ['./Navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
