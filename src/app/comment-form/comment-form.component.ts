import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
@Input() submitLabel!: string;
@Input() intitalText: string = '';
@Output() submitHandler = new EventEmitter<string>();

form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.intitalText, Validators.required],
    });
  }
onSubmit(){
  this.submitHandler.emit(this.form.value.title);
}
}
