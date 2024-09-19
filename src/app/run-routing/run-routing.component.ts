import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-run-routing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './run-routing.component.html',
  styleUrl: './run-routing.component.css'
})
export class RunRoutingComponent {
  title = 'Angular Routing Concept Implementation';
  footerUrl = 'http://www.google.com';
  footerLink = 'https://angular.dev/';
}
