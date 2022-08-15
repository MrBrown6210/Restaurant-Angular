import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenu } from 'src/api/interfaces/menu.interface';

@Component({
  selector: 'app-popular-menu[menu]',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.scss'],
})
export class PopularMenuComponent implements OnInit {
  @Input() menu!: IMenu;
  @Output() onClick = new EventEmitter<IMenu>();

  constructor() {}

  ngOnInit(): void {}
}
