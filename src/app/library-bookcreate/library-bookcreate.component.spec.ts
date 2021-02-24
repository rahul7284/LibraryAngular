import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBookcreateComponent } from './library-bookcreate.component';

describe('LibraryBookcreateComponent', () => {
  let component: LibraryBookcreateComponent;
  let fixture: ComponentFixture<LibraryBookcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryBookcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryBookcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
