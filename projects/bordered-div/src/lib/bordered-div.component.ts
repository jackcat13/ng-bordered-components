import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bordered-div',
  templateUrl: './bordered-div.html',
  styleUrls: [ './bordered-div.css' ]
})
export class BorderedDivComponent implements OnInit {

  @Input() bgColor!: string

  constructor() { }

  ngOnInit(): void {
  }

}
