import { Component, OnInit, Input } from '@angular/core';
import { TutorialService } from '../services/tutorials.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Tutorial } from '../model/tutorial.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutorials-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, ReactiveFormsModule ],
  templateUrl: './tutorials-details.component.html',
  styleUrl: './tutorials-details.component.css'
})
export class TutorialsDetailsComponent implements OnInit{
  @Input() viewMode = false;

  //We can also initialize Tutorial object attributes like this
  @Input() currentTutorial: Tutorial = {
    id: 0,
    title:'',
    description:'',
    published:false
  };

  message = '';

  constructor (private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router){ }

    ngOnInit(): void {
      if(!this.viewMode){
        this.message = '';
        this.getTutorial(this.route.snapshot.params['id']);
      }
    }

    getTutorial(id: string): void{
      this.tutorialService.get(id).subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }

    updatePublished(status: boolean): void{
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      this.message = '';

      this.tutorialService.update(this.currentTutorial.id, data).subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message?res.message : 'Update successful';
        },
        error: (e) => console.error(e)
      });
    }

    updateTutorial(): void{
      this.message = '';
      this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).
      subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message: 'Tutorial updated successfully';
        },
        error: (e) => console.log(e)
      });
    }

    deleteTutorial(): void{
      this.tutorialService.delete(this.currentTutorial.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['tutorials']);
        },
        error: (e) => console.error(e)
      });
    }

    changeViewMode(): void{
      this.viewMode=!this.viewMode;
    }
}
