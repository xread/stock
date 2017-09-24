import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  
  @Input()
  rating:number = 0;

  private star:boolean[] = [];

  constructor() { }

  ngOnInit() {
    for(let i = 1 ; i <= 5 ; i++){
        this.star.push(i > this.rating);
    }
  }

}
