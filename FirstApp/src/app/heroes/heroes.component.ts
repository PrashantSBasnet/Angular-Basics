import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  //heroes=HEROES;

  heroes: Hero[] = [];
  selectedHero?: Hero;

  //constructor() { }
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //synchronous approach
 // getHeroes(): void {
 //   this.heroes=this.heroService.getHeroes();  //observable data. fetches synchronously. mock db is used
    /*HeroService.getHeroes() will return an Observable because it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.
       But soon the application will fetch heroes from a remote server, which is an inherently asynchronous operation.
       The HeroService must wait for the server to respond, getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.
     HeroService.getHeroes() must have an asynchronous signature of some kind.
  */
// }


//asynchronous approach
/*waits for the Observable to emit the array of heroes —which could happen
 now or several minutes from now. The subscribe() method passes the emitted
 array to the callback, which sets the component's heroes property.This asynchronous
  approach will work when the HeroService requests heroes from the server.
*/
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}
