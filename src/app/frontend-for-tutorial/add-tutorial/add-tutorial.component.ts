import { Component } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';
import { TutorialService } from '../services/tutorials.service';
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-tutorial',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent {
tutorial: Tutorial={
  id:0,
  title:'',
  description:'',
  published:false
};
submitted = false;

constructor(private tutorialService: TutorialService){}

saveTutorial(): void{
  const data = {
    title: this.tutorial.title,
    description: this.tutorial.description
  }

  this.tutorialService.create(data).subscribe({
    next: (res) => {
      console.log(res);
      this.submitted = true;
    },
    error: (e) => console.error(e)
  });
}

newTutorial(): void{
  this.submitted = false;
  this.tutorial = {
    title:'',
    description:'',
    published:false
  };
}
}
