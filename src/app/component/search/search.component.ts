import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();
  onsearch(){
    console.log("search")
    this.search.emit(this.text)
  }
  text="";
inputChange(event:any){
  console.log("input called" ,event.target.value);
  this.text=event.target.value;
}
onTyping(event:any){
  console.log("typing  called" ,event.target.value);
}
}
