import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images = ['../../../assets/news1.jpg','../../../assets/news2.jpg','../../../assets/news3.jpg'];
  
  constructor() { }

  ngOnInit(): void {
  }

}

