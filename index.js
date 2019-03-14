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
  //return document.querySelector('#grand-node div div div div').innerHTML;
  var grand = document.querySelector('#grand-node');
  var divChain = grand.children[0].children[0].children[0].children[0];
  
  return divChain;  // for some reason I thought it wanted the innerHTML value instead of the child
}

function increaseRankBy(n)
{
  // increases the ranks in the .ranked-list by n
  var firstList = document.querySelector('div.ranked-list li li');
  var secondList = document.querySelector('div.ranked-list li li li');
  
  for(let i = 0; i < firstList.childNodes.length; i++)
  {
    firstList[i].innerHTML = parseInt(firstList[i].innerHTML) + 1;
  }
  
  for(let i = 0; i < secondList.childNodes.length; i++)
  {
    secondList[i].innerHTML = parseInt(secondList[i].innerHTML) + 1;
  }
}

