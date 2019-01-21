import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentsExampleComponent } from './webcomponents-example.component';

describe('WebcomponentsExampleComponent', () => {
  let component: WebcomponentsExampleComponent;
  let fixture: ComponentFixture<WebcomponentsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcomponentsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomponentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
