import { Component } from '@angular/core';
import { Iitem } from './item';
import { ItemList } from '../services/item-list';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'tl-item',
  templateUrl: './deleted.component.html',
  styleUrls: ['./item.component.css']
})
export class DeletedCoponent {

  list: Iitem[] = [];
  constructor(private itemlist: ItemList) {
    this.list = this.itemlist.getDataArray();
  }

  onChange(): void {
    localStorage.setItem('items', JSON.stringify(this.list));
  }

  del(): void {
      this.list = this.list.filter(item => !item.deleted);
      this.onChange();
  }
  ref(): void {
    location.reload();
  }
}
