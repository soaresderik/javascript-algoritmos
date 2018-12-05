module.exports = function Queue() {
  let items = [];

  this.enqueue = function(elem) {
    items.push(elem);
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };
};

/*

let queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue("John");
queue.enqueue("Josh");
queue.enqueue("Camilla");

queue.print();

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();
queue.print();                */
