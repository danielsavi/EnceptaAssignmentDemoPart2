import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachingdataService {
  
  private values: Map<any, any> = new Map<any, any>();
  private maxEntries: number = 1000;

  public get(key: any): any {
    const hasKey = this.values.has(key);
    let entry: any;
    if (hasKey) {
      // peek the entry, re-insert for LRU strategy
      entry = this.values.get(key);
      console.log(`found in cache => ${entry}`); //TODO: we can remove this after debugging =)
      this.values.delete(key);
      this.values.set(key, entry);
    }
    else { 
      //code adapted from https://gist.github.com/dherges/86012049be7b1263b2e594134ff5816a
      console.log("not found in cache"); //TODO: we can remove this after debugging =)
    }
    
    return entry;
  }

  public put(key: any, value: any) {

    if (this.values.size >= this.maxEntries) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.values.keys().next().value;

      this.values.delete(keyToDelete);
    }

    this.values.set(key, value);
  }

  constructor() { }
}
