// Implementation of Insertion in BST

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(value){
        this.root= new Node(value)
        this.count=0
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;

        const newNode = new Node(value);

        const searchTree = (node)=>{
            if(value < node.value){
                if(!node.left){
                    node.left=newNode
                }
                else{
                    searchTree(node.left)
                }
            } else if(value > node.value){
                if(!node.right){
                    node.right=newNode
                }else{
                    searchTree(node.right)
                }
            }
        }

        searchTree(this.root)
    }
}

const bst = new BST(12)
bst.insert(12)
bst.insert(13)
bst.insert(16)

console.log(bst)

