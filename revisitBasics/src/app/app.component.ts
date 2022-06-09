import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revisitBasics';

  @Input() currentvalue:string ="parent value from app.component.ts using two way binding";

}
