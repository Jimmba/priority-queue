const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.heapSize++;
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (!this.isEmpty()) {
			let detachedRoot = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detachedRoot);
			this.shiftNodeDown(this.root);
			this.heapSize--;
			return this.data;
		}
	}

	detachRoot() {
		let detachedRoot = this.root;
		if (this.parentNodes.indexOf(this.root) != -1) this.parentNodes.shift();
		this.root = null;
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
	//	this.root = this.parentNodes.pop();
		
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		return this.root === null && this.parentNodes.length === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
		if (this.isEmpty()) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			this.parentNodes[0].appendChild(node);
		}
		if (this.parentNodes[0].left && this.parentNodes[0].right) this.parentNodes.shift();
	}

	shiftNodeUp(node) {
		if (node.parent && node.priority > node.parent.priority) {
			const nodeIndex = this.parentNodes.indexOf(node);
			const parentIndex = this.parentNodes.indexOf(node.parent);
			if (nodeIndex != -1) {
				if (parentIndex != -1) this.parentNodes[parentIndex] = node;
				this.parentNodes[nodeIndex] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node)
		}
		if (!node.parent) this.root = node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;