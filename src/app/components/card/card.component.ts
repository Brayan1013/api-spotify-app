import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  artistDetails(id: string) {
    this.router.navigate(['/artist', id])
  }

}
