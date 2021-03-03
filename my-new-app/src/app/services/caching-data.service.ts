import { Injectable } from '@angular/core';
import { Node } from 'src/app//model/node';

const MAX_CACHE_LIMIT = 3; //change here as needed

@Injectable({
  providedIn: 'root'
})
export class CachingDataService<T> {
  private limit: number;
  private size: number;
  private head: Node<T>;
  private tail: Node<T>;
  private cache: Object;

  constructor() {
    this.limit = MAX_CACHE_LIMIT;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  public setLimit(limit: number) {
    this.limit = limit;
  }

  public put(key: string, value: T) {
    this.ensureLimit();

    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    //Update the cache map
    this.cache[key] = this.head;
    this.size++;
  }

  public get(key: string) {
    if (this.cache[key]) {
      const value = this.cache[key].value;

      // node removed from it's position and cache
      this.remove(key)
      // write node again to the head of LinkedList to make it most recently used
      this.put(key, value);

      return value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }

  private remove(key: string) {
    const node = this.cache[key];
    
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  private ensureLimit() {
    if (this.size === this.limit) {
      this.remove(this.tail.key)
    }
  }

  public clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }

  // Invokes the callback function with every node of the chain and the index of the node.
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // To iterate over LRU with a 'for...of' loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}
