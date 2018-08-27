import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>{{name}}</h1>
    <p><strong>Email: </strong>{{email}}</p>
    <p><strong>Address: </strong>{{address.street}}, {{address.city}}, {{address.state}}</p>
    <button (click)='toggleHobbies()'>{{showHobbies ? "Hide hobbies" : "Show hobbies"}}</button>
    <div *ngIf='showHobbies'>
        <h3>Hobbies</h3>
        <ul>
            <li *ngFor='let hobby of hobbies; let i = index'>
                {{hobby}} <button (click)='deleteHobby(i)'>X</button>
            </li>
        </ul>
        <form (submit)='addHobby(hobby.value)'>
          <label>Add hobby: </label><br/>
          <input type='text' #hobby/><br/>
        </form>
    </div>
    <hr/>
    <h3>Edit User</h3>
    <form>
      <label>Name: </label><br/>
      <input type='text' name='name' [(ngModel)]='name'/><br/>
      <label>Email: </label><br/>
      <input type='email' name='email' [(ngModel)]='email'/><br/>
      <label>Street: </label><br/>
      <input type='text' name='address.street' [(ngModel)]='address.street'/><br/>
      <label>City: </label><br/>
      <input type='text' name='address.city' [(ngModel)]='address.city'/><br/>
      <label>State: </label><br/>
      <input type='text' name='address.state' [(ngModel)]='address.state'/><br/>
    </form>
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

  addHobby (hobby: string) {
    this.hobbies.push(hobby)
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1)
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}