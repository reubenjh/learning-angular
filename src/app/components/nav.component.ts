import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    template: `
      <ul>
        <li><a routerLink='/'>Home</a></li>
        <li><a routerLink='/about'>About</a></li>
      </ul>
      <hr />
    `
})
export class NavComponent { }