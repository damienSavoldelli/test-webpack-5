import _ from 'lodash'

let a = 'salue les gens';

const [b, , c] = [1,2,3,4]

console.log('test')

console.log(a)
console.log(b)

// test with lodash
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

window.onload = function() {
  document.body.appendChild(component());
}