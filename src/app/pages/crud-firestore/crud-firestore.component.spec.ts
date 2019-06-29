import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFirestoreComponent } from './crud-firestore.component';

describe('CrudFirestoreComponent', () => {
  let component: CrudFirestoreComponent;
  let fixture: ComponentFixture<CrudFirestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFirestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
