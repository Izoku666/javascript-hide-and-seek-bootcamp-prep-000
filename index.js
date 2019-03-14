function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
    //return document.querySelector('div#target[0][0][0] div.target')
    return document.querySelector('#nested div.target');
  
}

function deepestChild()
{
  // reads the innerHTML of the deepest child
  return document.querySelector('#grand-node')
}

function increaseRankBy(n)
{
  // increases the ranks in the .ranked-list by n
}

