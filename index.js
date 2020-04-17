function inOrder(currentNode)
{
  if(currentNode.left)
  {
    inOrder(currentNode.left)
  };
  console.log(currentNode.data)
  if(currentNode.right)
  {
    inOrder(currentNode.right)
  };
}

function findOrAdd(rootNode, newNode)
{
  // This block was pulled from solution as test 'text' was not clear.
  // it("should return true if the and not modify the tree if the element exists")
  if(currentNode.data == newNode.data){
   return true
 }
  // Left
  if(rootNode.data > newNode.data){
    if(!rootNode.left){
      rootNode.left = newNode;
    } else {
      findOrAdd(rootNode.left, newNode);
    };
  };

  // Right
  if(rootNode.data < newNode.data){
    if(!rootNode.right){
      rootNode.right = newNode;
    } else {
      findOrAdd(rootNode.right, newNode);
    };
  };
}

//      5
//      |
//   3 --- 7
//         |
//        --- 9
//
function max(node)
{
  let maxNode = node;
  if(node.right){
    maxNode = max(node.right);
  };
  return maxNode;
}

function min(node)
{
  let minNode = node;
  if(node.left){
    minNode = max(node.left);
  };
  return minNode;
}
