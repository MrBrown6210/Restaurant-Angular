import { Component, Input, OnInit } from '@angular/core';
import { IClient } from 'src/api/interfaces/client.interface';

@Component({
  selector: 'app-feature-client-list',
  templateUrl: './feature-client-list.component.html',
  styleUrls: ['./feature-client-list.component.scss'],
})
export class FeatureClientListComponent implements OnInit {
  @Input() clients: IClient[] = [];
  constructor() {}

  ngOnInit(): void {}
}
