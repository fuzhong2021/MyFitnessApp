import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-drowdown',
  templateUrl: './drowdown.component.html',
  styleUrls: ['./drowdown.component.scss'],
})
export class DrowdownComponent implements OnInit {

  @Input() headerText: string = '';
  open = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.open = !this.open;
  }

}
