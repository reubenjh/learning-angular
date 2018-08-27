import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email: </strong>{{email}}</p>
    <p><strong>Address: </strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
    <button (click)='toggleHobbies()'>{{showHobbies ? "Hide hobbies" : "Show hobbies"}}</button>
    <div *ngIf='showHobbies'>
        <h3>Hobbies</h3>
        <ul>
            <li *ngFor='let hobby of hobbies'>
                {{hobby}}
            </li>
        </ul>
    </div>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Stevie Wonder';
    this.email = 'steve@gmail.com';
    this.address = {
      street: '12 Potto Pl',
      city: 'Bawston',
      state: 'MA'
    }
    this.hobbies = ['music', 'movies', 'sports'];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}