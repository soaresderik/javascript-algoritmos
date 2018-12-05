function LinkedList() {
  // Debugger
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(element) {
    let node = new Node(element),
      current;

    if (head === null) head = node;
    else {
      current = head;

      while (current.next) current = current.next;

      current.next = node;
    }

    length++;
  };
  this.insert = function(position, element) {};
  this.removeAt = function(position) {};
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};
}

let list = new LinkedList();
list.append(15);
list.append(10);
list.append(5);
