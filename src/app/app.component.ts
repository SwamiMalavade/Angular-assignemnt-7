import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SecondComponentComponent,
    FirstComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public value: string = 'Marvellous Infosystems';
  public changedValue: string = '';

  public fun(type: any): any {
    if (type == 'upper') return (this.changedValue = this.value.toUpperCase());
    if (type == 'lower')
      return (this.changedValue = this.value.toLocaleLowerCase());
  }
}
