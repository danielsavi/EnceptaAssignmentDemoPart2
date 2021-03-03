import { Component, OnInit } from '@angular/core';
import { CachingDataService } from 'src/app/services/caching-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public cache: CachingDataService<string>) { }
  
  //make caching methods accordingly to your needs =) - this is a demo code
  
  public setCacheValue(key: string, value: string) {
    this.cache.put(key, value);
  }

  public getCacheValue(key: string) {
    return this.cache.get(key);
  }

  public printAllCacheKeys() {
    console.clear();
    for (const k of this.cache) {
      console.log(`${k.key}`);
    }
  }

  public clearAllCacheKeys() {
    this.cache.clear();
  }

  ngOnInit(): void {
  }
}
