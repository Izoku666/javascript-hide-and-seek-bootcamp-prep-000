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
  var main = document.querySelector('#app');
  var list = main.querySelectorAll('ul.ranked-list > li');
  for(let i = 0; i < list.length; i++)
  {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
  return list;

}

