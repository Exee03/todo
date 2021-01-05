import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numberA: number;
  numberB: number;

  card: Array<string> = [
    'card 1',
    'card 2',
    'card 3',
    'card 4',
  ];

  // ctrl + d  => select multiple
  // ctrl + /  => comment 

  cardObject = [
    {
      title: 'title 1',
      subtitle: 'subtitle 1',
      content: 'content 1',
    },
    {
      title: 'title 2',
      subtitle: 'subtitle 2',
      content: 'content 2',
    },
    {
      title: 'title 3',
      subtitle: 'subtitle 3',
      content: 'content 3',
    },
  ];

  constructor(
    private commonService: CommonService,
    private storage: Storage
  ) { }

  calculate() {
    console.log('numberA => ', this.numberA);
    console.log('numberB => ', this.numberB);
    var value = this.commonService.add(this.numberA, this.numberB)
    console.log('final value => ', value);
  }

  addDB() {
    this.storage.set('name', 'Max');
  }

  async readDb() {
    // this.storage.get('name').then((val) => {
    //   console.log(val);
    // });
    const val = await this.storage.get('name');
    console.log(val);

  }

}
