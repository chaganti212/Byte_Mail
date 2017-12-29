import { Component } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
})
export class SearchComponent  {
  ngOnInit() {
    console.log("I am initializing search component");
  }
 }