import { Component } from '@angular/core';
import { AlertService } from 'src/shared/src/services';

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
