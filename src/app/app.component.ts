import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-recipe-app';
  selectedFeature: string = 'recipe';

  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }
}
