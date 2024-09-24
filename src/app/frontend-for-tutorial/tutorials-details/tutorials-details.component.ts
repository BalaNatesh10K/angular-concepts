import { Component, OnInit, Input } from '@angular/core';
import { TutorialService } from '../services/tutorials.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Tutorial } from '../model/tutorial.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Comment } from '../model/comment.model';
import { CommentsService } from '../services/comments.service';
import { TagsService } from '../services/tags.service';
import { Tag } from '../model/tags.model';

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

 comments: Comment[] =[]; 
 tags: Tag[]=[];
  message = '';

  constructor (private tutorialService: TutorialService, private commentService: CommentsService,
    private tagService: TagsService,
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

    getCommentsOfTutorial(id: string): void{
      this.commentService.getAllTutorialComments(id).subscribe({
      next: (data) => {
        this.comments = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    }

    getTagsOfTutorial(id: string): void{
      this.tagService.getAllTutorialTags(id).subscribe({
        next: (data) => {
          this.tags = data;
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
      setTimeout(() => {
        this.router.navigate([`/tutorials`]);
      },1000); // After 1 second, after we click on update tutorial button, page will automatically
      // redirect to tutorials page for us to verify our changes
    }

    deleteTutorial(): void{
      this.tutorialService.delete(this.currentTutorial.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['tutorials']);
        },
        error: (e) => console.error(e)
      });
      setTimeout(() => {
        this.router.navigate([`/tutorials`]);
      }, 1000); // after 1 second, after we click on delete tutorial button, page will automatically
      // redirect to tutorials page for us to verify our changes
    }
}
