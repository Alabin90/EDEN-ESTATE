import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  age?: string;
  address?: string;
}

@Component({
  selector: 'app-mysignin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mysignin.component.html',
  styleUrls: ['./mysignin.component.css']
})
export class MysigninComponent {
  email = '';
  password = '';
  message = '';
  studentArray: StudentInterface[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const studentsData = localStorage.getItem('students');
    if (studentsData) {
      this.studentArray = JSON.parse(studentsData);
    }
  }

  signin(): void {
    const currentUser = this.studentArray.find(
      student => student.email === this.email && student.password === this.password
    );
  
    if (currentUser) {
      // Save login state
      localStorage.setItem('current_user', JSON.stringify(currentUser));
  
      // Clear form
      this.email = '';
      this.password = '';
      this.message = '';
  
      // Force navigation
      this.router.navigateByUrl('/properties'); // <-- works better
    } else {
      this.message = 'User not found or incorrect password';
      alert(this.message);
    }
  }
}