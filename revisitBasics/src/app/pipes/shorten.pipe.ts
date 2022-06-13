//custom pipe

import { Component, NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  transform(value: any, ...args: any[]) {
    return value.substr(0,5);
  }


  //for parameterizing a pipe
  // transform(value: any, limit: number){
  //   if (value.length > limit){
  //     return value.substr(0,limit) + '...';
  //   }
  //   return value;
  // }


}
