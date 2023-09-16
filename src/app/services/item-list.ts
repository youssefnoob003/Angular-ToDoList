import { Injectable } from '@angular/core';
import { Iitem } from '../item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemList{
  dataArray: Iitem[] = this.init();

  edit: Iitem = {
    title:"",
    desc:"",
    done:false,
    deleted:false,
    ed: false
   }

  init(): Iitem[]
  {
    const data = localStorage.getItem('items');
    if(data)
  {
    return JSON.parse(data);
  }
  return [];
  }
  
  getDataArray(): any[] {
    return this.dataArray;
  }
  
  addDataToArr(data: any): void {
    this.dataArray.push(data);
    localStorage.setItem('items', JSON.stringify(this.dataArray));
  }
}
