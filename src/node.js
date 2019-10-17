class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(!this.left){
			this.left=node;
			this.left.parent=this;
		}else{
			if(!this.right){
				this.right=node;
				this.right.parent=this;
			}
		}
	}

	removeChild(node) {
		let hasChild =false;
		if(this.left==node){
			this.left=null;
			node.parent=null;
			hasChild=true;
		}
		if(this.right==node){
			this.right=null;
			node.parent=null;
			hasChild=true;
		}
		if (!hasChild){
			throw new Error();
		}

	}

	remove() {
		if (this.parent!=null){
		 	this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent){

			let PP = this.parent.parent;
			let PR = this.parent.right;
			let PL = this.parent.left;

			let P = this.parent;
			let L = this.left;
			let R = this.right;
			
			if (this.parent.parent != null){
				if (this.parent.parent.left != null && this.parent.parent.left == P){
					this.parent.parent.left = this;
				}
				if (this.parent.parent.right != null && this.parent.parent.right == P){
					this.parent.parent.right = this;
				}
			}
			if (this.left != null){
				this.left.parent = P;
			}

			if (this.right != null){
				this.right.parent = P;
			}
			
			if (PL != null && PL == this){
				if (PR != null){
					PR.parent = this;
					this.right = PR;
					this.left = P;
				} else {
					this.right = null;
				}
			}
			if (PR != null && PR == this){
				if (PL != null){
					PL.parent=this;
					this.left=PL;
					this.right=P;
				} else {
					this.left = null;
				}
			}
			this.parent.parent = this;
			this.parent.right = R;
			this.parent.left = L;
			this.parent = PP;
		}
	}
}

module.exports = Node;
