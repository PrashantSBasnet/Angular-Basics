import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{

  server:string = 'Hardcoded name of Server'
  serverId :number =10;
  serverStatus :string= 'offline';

   getServerName(){
    return this.server;
  }
}
