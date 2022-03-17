import { Component, OnInit } from '@angular/core';
import CommentData from '../../assets/data.json';

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
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

 comment: Comment[] = CommentData.comments;

}