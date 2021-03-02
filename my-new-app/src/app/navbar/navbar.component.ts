import { Component, OnInit } from '@angular/core';
import { CachingdataService } from '../cachingdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public cache: CachingdataService) { }

  ngOnInit(): void {
  }

}
