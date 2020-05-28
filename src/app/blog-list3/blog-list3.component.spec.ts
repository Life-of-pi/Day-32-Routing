import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogList3Component } from './blog-list3.component';

describe('BlogList3Component', () => {
  let component: BlogList3Component;
  let fixture: ComponentFixture<BlogList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
