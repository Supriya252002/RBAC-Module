import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbooard',
  standalone: true,
  imports: [],
  templateUrl: './dashbooard.component.html',
  styleUrl: './dashbooard.component.css'
})
export class DashbooardComponent {
  constructor(private router: Router) { }
  
  OnclickedUser() {
    this.router.navigate(['/users']);
  }
  
  OnclickedRole() {
    this.router.navigate(['/roles']);
  }
}
