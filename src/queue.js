const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=(!maxSize) ? 30: maxSize;
		this.heap=new MaxHeap();
	}
	

	push(data, priority) {
		if (this.heap.size()==this.maxSize){
			throw new Error ('Reached max size');
		}
		this.heap.push(data, priority);
		
	}

	shift() {
		//let removedNodeData=this.heap.pop();
		if (this.heap.isEmpty()) throw new Error;

		//return removedNodeData;
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
