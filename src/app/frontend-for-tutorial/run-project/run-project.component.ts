import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TutorialsListComponent } from '../tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from '../tutorials-details/tutorials-details.component';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-run-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet, TutorialsListComponent,
    TutorialsDetailsComponent, RouterLink, CommonModule, NgClass, NgIf, NgFor, FormsModule
  ],
  templateUrl: './run-project.component.html',
  styleUrl: './run-project.component.css'
})
export class RunProjectComponent {

}
