import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
