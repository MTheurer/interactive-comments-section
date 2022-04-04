import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CommentData from 'src/assets/data.json';
import {HttpClient} from '@angular/common/http'

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

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor() { }

  getData(): Comment[]{
    return CommentData.comments;
  }

  /* private httpClient: HttpClient
  createComment( text:string, parentId:null|string): Observable<Comment>{
    return this.httpClient.post<Comment>(
      'http://localhost:4200',
      {
        body:text,
        parentId
      }
    );
  }*/
}
