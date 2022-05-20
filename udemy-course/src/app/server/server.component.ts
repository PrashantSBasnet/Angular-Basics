import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online{
        color: white;
      }
  `]
})
export class ServerComponent{

  server:string = 'Hardcoded name of Server'
  serverId :number =10;
  serverStatus :string= 'offline';

  constructor(){
    this.serverStatus= Math.random() >0.5 ? 'online': 'offline';
  }

   getServerName(){
    return this.server;
  }

  getColor(){
    return this.serverStatus==='online' ? 'green' : 'red';
  }
}
