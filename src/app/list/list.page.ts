import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRadioChanged(event){
    console.log(event.detail.value);
    
  }

  unread(){
    console.log('unread');
    
  }

  onCheckboxChanged(event) {
    console.log(event.detail.checked);
    
  }

  onInputChange(event){
    console.log(event);
    
  }

}
