import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsExampleComponent } from './assets-example.component';

describe('AssetsExampleComponent', () => {
  let component: AssetsExampleComponent;
  let fixture: ComponentFixture<AssetsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
