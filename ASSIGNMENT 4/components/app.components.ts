import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
    template: `<div>
                    <h1> {{FirstName + ' ' + LastName}} </h1>                 
               </div>`
})

export class AppComponent {
  FirstName: string = 'Shekhar';
  LastName: string = 'Mohan';
}
