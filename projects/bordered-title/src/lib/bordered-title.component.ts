import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bordered-title',
  templateUrl: './bordered-title.html',
  styleUrls: [ './bordered-title.css' ]
})
export class BorderedTitleComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
