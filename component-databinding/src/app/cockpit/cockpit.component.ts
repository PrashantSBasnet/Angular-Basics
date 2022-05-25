import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // passing own even out of the component @Output is used to make it listenable out of the component
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string} |any>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string }|any>();

  newServerName= '';
  newServerContent= '';


  constructor() {

  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: any){
    console.log(nameInput); //gives element in console
    console.log(nameInput.value); //gives value in console
    this.serverCreated.emit({
     // serverName: this.newServerName,
       serverName:nameInput.value,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint(){
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    })
  }
}



