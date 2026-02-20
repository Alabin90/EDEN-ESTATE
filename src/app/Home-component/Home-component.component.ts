import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponentComponent } from '../Navbar-component/Navbar-component.component';

@Component({
  standalone: true,
  imports: [CommonModule,RouterLink , NavbarComponentComponent],
  selector: 'app-Home-component',
  templateUrl: './Home-component.component.html',
  styleUrls: ['./Home-component.component.css']
})
export class HomeComponentComponent  {
listings: any;
link: any|string;


  constructor() { }

  ngOnInit() {
  }

}
