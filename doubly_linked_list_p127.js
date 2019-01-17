function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };
  let length = 0;
  let head = null;
  let tail = null;

  this.append = function(element) {
    let node = new Node(element);
    if (head === null) {
      tail = node;
      head = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }

    length++;
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        index = 0,
        previous;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;

        current.prev = node;
        node.prev = previous;

        length++;
        return true;
      }
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;

        if (length === 1) tail = null;
        else head.prev = null;
      } else if (position === length) {
        current = tail;
        tail = current.next;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };
}

let list = new DoublyLinkedList();
list.append(14);
list.append(15);
list.append(13);
list.insert(3, 11);
list.insert(2, 17);
list.removeAt(0);
