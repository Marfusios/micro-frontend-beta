import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webcomponents-example',
  templateUrl: './webcomponents-example.component.html',
  styleUrls: ['./webcomponents-example.component.scss']
})
export class WebcomponentsExampleComponent implements OnInit {

  hideButton = false;

  constructor() { }

  ngOnInit() {
  }

}
