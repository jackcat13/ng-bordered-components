import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bordered-button',
  templateUrl: './bordered-button.html',
  styleUrls: [ './bordered-button.css' ]
})
export class BorderedButtonComponent implements OnInit {

  @Input() title!: string;
  @Input() color!: string;
  @Input() backgroundColor!: any;

  hover = false

  constructor() { }

  ngOnInit(): void {
  }

}
