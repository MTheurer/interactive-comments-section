import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() reply!: Reply;
  @Input() replyMessage!: string;
  
  toggle = true;
status = "Enable";

  constructor() { }

  ngOnInit(): void {
    if (this.replyMessage = 'true'){
      this.toggle = !this.toggle;
      this.status = this.toggle ? "Enable" : "Disable";
    }
  }

}
