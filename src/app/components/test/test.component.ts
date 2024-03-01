import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {


  isBoxVisible = false;

  toggleBox() {
    this.isBoxVisible = !this.isBoxVisible;
  }

}
