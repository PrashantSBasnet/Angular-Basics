import { Component, Input, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string} |any;
  @Input() id: number|any;

  /*
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
  */

  //another approach
  @Output() statusChanged = new EventEmitter<{id:number, newStatus:string}>();

  // constructor(private loggingService:LoggingService){}

  // onSetTo(status:string){
  //   this.statusChanged.emit({id: this.id, newStatus:status});
  //   console.log('A server status changed, new status'+ status);
  // }

  constructor(private loggingService:LoggingService, private accountService:AccountsService){}

  onSetTo(status:string){
    this.accountService.updateStatus(this.id, status);
  //  this.loggingService.logStatusChange(status);
  }
}
