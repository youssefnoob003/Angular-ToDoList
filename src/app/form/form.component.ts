import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Iitem } from '../item/item';
import { ItemList } from '../services/item-list';
@Component({
  selector: 'tl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private item: ItemList) {}
  title: string = "";
  desc: string = "";

  add(item: any): void {
    this.item.addDataToArr(item);
  }
  onSubmit(): void {
    const item: Iitem = {
      title: this.title,
      desc: this.desc,
      done: false,
      deleted: false,
      ed: false
    }
    console.log(item);
    this.add(item);
  }
}

