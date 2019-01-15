import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesExampleComponent } from './styles-example.component';

describe('StylesExampleComponent', () => {
  let component: StylesExampleComponent;
  let fixture: ComponentFixture<StylesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
