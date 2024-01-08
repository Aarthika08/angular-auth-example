// // favorite-color.component.ts
// import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-template-favorite-color',
//   template: `
//     Favorite Color: <input type="text" [(ngModel)]="favoriteColor" />
//   `,
// })
// export class FavoriteColorComponent {
//   favoriteColor = '';
// }

// favorite-color.component.ts
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl" />
  `,
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
