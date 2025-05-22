import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor() {
  }
  public phoneNumber: string = '+375 (29) 368-98-68';
  public isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }


}
