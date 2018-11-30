import {firstName, lastName, year} from './b';
import Component from './component/';

console.log(firstName + ' ' + lastName + ' '+ year);

function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
Object.keys(Component).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    // Vue.component(`v${name}`, Component[key])
    console.log(name+'==='+key);
})
console.log(Component);
