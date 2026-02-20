import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Route, Router } from '@angular/router';
import { NavbarComponentComponent } from "../Navbar-component/Navbar-component.component";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponentComponent],
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
