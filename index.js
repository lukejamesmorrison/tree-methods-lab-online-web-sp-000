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
  // Left
  if(rootNode.data > newNode.data){
    if(!rootNode.left){
      rootNode.left = newNode;
    } else {
      findOrAdd(rootNode.left, newNode);
    };
    return true;
  };

  // Right
  if(rootNode.data < newNode.data){
    if(!rootNode.right){
      rootNode.right = newNode;
    } else {
      findOrAdd(rootNode.right, newNode);
    };
    return true;
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
