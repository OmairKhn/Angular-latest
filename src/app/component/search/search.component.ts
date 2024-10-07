import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  onsearch(){
    console.log("search")
    this.search.emit(this.text)
  }
  text="";
  onReset() {
    this.text = "";
    this.reset.emit();
  }
// inputChange(event:any){
//   console.log("input called" ,event.target.value);
//   this.text=event.target.value;
// }
// onTyping(event:any){
//   console.log("typing  called" ,event.target.value);
// }
}
