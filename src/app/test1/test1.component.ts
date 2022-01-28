import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  public imageUrl = "../../favicon.ico";
  constructor() { }

  ngOnInit(): void {
  }

  public expand(imageUrl: string): void {

    
    //console.log("receipts:", this.expenseReceipts, " url :", imageUrl, " service :", this.transferService.getData());
    window.open('/test2/'+'('+imageUrl+')');
    
  }
}
