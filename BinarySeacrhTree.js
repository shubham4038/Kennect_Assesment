//Binary Seach tree
/* A binary search tree follows some order to arrange the elements. In a Binary search tree, the value of left node must be smaller than the parent node,
and the value of right node must be greater than the parent node. This rule is applied recursively to the left and right subtrees of the root.
 */

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

const jc = new BST(20);
jc.insert(12);
jc.insert(29)
jc.insert(25);
console.log(jc.Node);


/* Recursion
Recursion is a process of calling itself. A function that calls itself is called a recursive function. from the above example we can see that
SEARCHTREE is a recusive function. Below is a small example of Recusrive function
*/

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4);

//Here countDown is recursive function.








