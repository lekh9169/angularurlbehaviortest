import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  public imageUrl="";
  constructor(private location:Location) { 
    
  }

  ngOnInit(): void {
    this.imageUrl = this.location.path()
  }

}
