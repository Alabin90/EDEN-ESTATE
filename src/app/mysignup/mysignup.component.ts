import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponentComponent } from '../Navbar-component/Navbar-component.component';

interface StudentInterface {
  firstname: string;
  lastname: string;
  age: string;
  email: string;
  password: string;
  address: string;
}

@Component({
  selector: 'app-mysignup',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponentComponent],
  templateUrl: './mysignup.component.html',
  styleUrls: ['./mysignup.component.css']
})
export class MysignupComponent {
  firstname = '';
  lastname = '';
  age = '';
  email = '';
  password = '';
  address = '';
  message = '';

  studentArray: StudentInterface[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('students');
    if (storedUsers) {
      this.studentArray = JSON.parse(storedUsers);
    }
  }

  signup(): void {
    // Basic validation
    if (!this.firstname || !this.lastname || !this.email || !this.password) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    // Check if email already exists
    const existingUser = this.studentArray.find(u => u.email === this.email);
    if (existingUser) {
      this.message = 'Email already registered. Please sign in.';
      return;
    }

    const studentObj: StudentInterface = {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      email: this.email,
      password: this.password,
      address: this.address
    };

    // Add new user
    this.studentArray.push(studentObj);
    localStorage.setItem('students', JSON.stringify(this.studentArray));

    // Clear form
    this.firstname = '';
    this.lastname = '';
    this.age = '';
    this.email = '';
    this.password = '';
    this.address = '';
    this.message = '';

    // Redirect to signin page
    this.router.navigate(['/signin']);
  }
}