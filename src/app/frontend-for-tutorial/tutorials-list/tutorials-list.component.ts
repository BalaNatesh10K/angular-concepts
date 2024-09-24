import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { TutorialService } from '../services/tutorials.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TutorialsDetailsComponent } from '../tutorials-details/tutorials-details.component';
import { AboutComponent } from "../../pages/general/about/about.component";


@Component({
  selector: 'app-tutorials-list',
  standalone: true,
  imports: [FormsModule, CommonModule, TutorialsDetailsComponent, AboutComponent],
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent implements OnInit {

  tutorials: Tutorial[] = [];

  @Input() currentTutorial: Tutorial = {
    id: null,
    title: '',
    description: '',
    published: false
  };
  currentIndex = -1;
  title = '';

  constructor (private tutorialService: TutorialService){ }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void{
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  refreshList(){
    this.retrieveTutorials();
    this.currentIndex=-1;
    this.currentTutorial={
      id: null,
      title: '',
      description: '',
      published: false
    };
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void{
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void{
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.log(e)
    });
  }

  searchByTitle(): void {
    this.currentTutorial = {
      id: null,
      title: '',
      description: '',
      published: false
    };
    this.currentIndex = -1;
    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }
}
