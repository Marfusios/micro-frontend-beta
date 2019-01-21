import { Component } from '@angular/core';
import { AlertService } from '../../shared';

@Component({
  selector: 'app-shared-example',
  templateUrl: './shared-example.component.html',
  styleUrls: ['./shared-example.component.scss']
})
export class SharedExampleComponent {
  constructor(private alertService: AlertService) { }

  onSave() {
    this.alertService.showDialog('test123');
  }
}
