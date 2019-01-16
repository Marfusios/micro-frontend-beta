import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }

  constructor() {
    console.log('ButtonComponent.constructor()');
  }

  ngOnInit() {
    console.log('ButtonComponent.ngOnInit()');
  }

  ngOnDestroy() {
    console.log('ButtonComponent.ngOnDestroy()');
  }
}
