import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }
   public instLink: string = "https://www.instagram.com/pyatkov.o/";
  public phoneNumber: string = '+375 (29) 368-98-68';

}
