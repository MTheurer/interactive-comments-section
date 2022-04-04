import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-comment-individual',
  templateUrl: './comment-individual.component.html',
  styleUrls: ['./comment-individual.component.scss']
})
export class CommentIndividualComponent implements OnInit {
@Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }
}