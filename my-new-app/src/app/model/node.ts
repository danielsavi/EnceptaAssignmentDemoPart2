export class Node<T> {
    constructor(public key: string, private value: T, public next: Node<T> = null, public prev: Node<T> = null) { }
}
