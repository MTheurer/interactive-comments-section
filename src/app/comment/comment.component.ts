import { Component, OnInit, Input} from '@angular/core';
import {CommentServiceService} from '../comment-service.service'
import { ReplyComponent } from '../reply/reply.component';

interface Comment{
  id: number;
  content:string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    }
    username: string;
  }
  replies: Reply[];
}

interface Reply{
  id: number;
  content:string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: {
      png: string;
      webp: string;
    }
    username: string;
  }
}


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = []
  replies: Reply[] = []
  @Input() currentUserId!: string;
  replyToggle: string = 'true';
  constructor(private commentService: CommentServiceService) { 
  }

  ngOnInit(): void {
    this.comments = this.commentService.getData();
  }

addComment({text, parentId}: {text: string, parentId: null|string}): void{
console.log('addComment', text, parentId)
/*this.commentService.createComment(text, parentId).subscribe((createdComment) => {
  this.comments = [...this.comments, createdComment];
});*/
}
}