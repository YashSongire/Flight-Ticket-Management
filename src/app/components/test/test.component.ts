import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  isActive = false;

  constructor() {}

  toggleTab(): void {
    this.isActive = !this.isActive;
  }

  get tabText(): string {
    return this.isActive ? '-' : '+';
  }
}
