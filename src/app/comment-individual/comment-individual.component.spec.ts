import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentIndividualComponent } from './comment-individual.component';

describe('CommentIndividualComponent', () => {
  let component: CommentIndividualComponent;
  let fixture: ComponentFixture<CommentIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
