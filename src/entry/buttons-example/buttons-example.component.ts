import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-example',
  templateUrl: './buttons-example.component.html',
  styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent implements OnInit {

  hideButton = false;
  validateLoading = false;
  submitLoading = false;

  constructor() { }

  ngOnInit() {
  }


  validateDemo() {
    this.validateLoading = true;
    this.submitLoading = false;
  }

  submitDemo() {
    this.submitLoading = true;
    this.validateLoading = false;
  }

}
