// itemArrayRemoval

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

//  code
 
for( let i = 0; i < names.length; i++){ 
    if ( names[i] === 'Ahmad') {
      names.splice(i, 1); 
    }
 }

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']