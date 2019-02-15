import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateExampleComponent } from './state-example.component';

describe('StateExampleComponent', () => {
  let component: StateExampleComponent;
  let fixture: ComponentFixture<StateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
