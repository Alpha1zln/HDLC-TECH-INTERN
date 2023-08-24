// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-root',
//     template: `<div>
//                     <h1> {{FirstName + ' ' + LastName}} </h1>                 
//                </div>`
// })

// export class AppComponent {
//   FirstName: string = 'Shekhar';
//   LastName: string = 'Mohan';
// }


import { Component } from "@angular/core";  
@Component({  
    selector: 'my-App',  
    template: `  
                <div>  
                <strong>{{firstname}}</strong>  
                 <strong>{{lastname}}</strong>  
                </div>  
})  
export class AppComponent {  
    firstname: string = "Sachin";  
    lastname:string = "Tendulkar"  
