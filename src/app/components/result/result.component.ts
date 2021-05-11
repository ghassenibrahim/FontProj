import { Component, Input, OnInit } from '@angular/core';
import { Builder } from 'selenium-webdriver';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() child:any;
  constructor() { }

  ngOnInit() {
  }
}

