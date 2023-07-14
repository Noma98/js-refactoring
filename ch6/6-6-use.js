import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
owner.firstName = '엘리'; //TypeError: Cannot set property firstName of #<Person> which has only a getter
console.log(owner);
console.log(getDefaultOwner());
