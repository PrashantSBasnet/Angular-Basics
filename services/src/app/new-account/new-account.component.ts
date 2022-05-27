import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingService]
})
export class NewAccountComponent {



  /*
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
     this.accountsService.addAccount(accountName, accountStatus);
     //this.loggingService.logStatusChange(accountStatus);

  }
  */

  //approach 1
  @Output() accountAdded = new EventEmitter<{name:string, status:string}>();

  //constructor(private loggingService: LoggingService){}
  // onCreateAccount(accountName:string, accountStatus:string){
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status:accountStatus
  //   });
  //   this.loggingService.logStatusChange(accountStatus);

  // }


  //by creating data service for account

  constructor(private loggingService:LoggingService,
    private accountService:AccountsService){}

  onCreateAccount(accountName: string, accountStatus:string){
    this.accountService.addAccount(accountName,accountStatus);
   // this.loggingService.logStatusChange(accountStatus);
  }
}
