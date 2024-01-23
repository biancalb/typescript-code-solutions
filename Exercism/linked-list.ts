export class LinkedList<TElement> {
    private list: Array<TElement> = [];

    constructor() {
        this.list = [];
    }

    public push(element: TElement) {
        this.list.push(element);
    }
  
    public pop(): TElement {
        const lastElement = this.list.pop() as TElement;
        return lastElement;
    }
  
    public shift(): TElement {
        const firstElement = this.list.shift()  as TElement;
        return firstElement;
    }
  
    public unshift(element: TElement) {
      this.list.unshift(element);
    }
  
    public delete(element: TElement) {
        this.list = this.list.filter(el => el !== element);
    }
  
    public count(): number {
      return this.list.length;
    }
  }
  