var array = ['JavaScript', 'PHP', 'Ruby']


//Destructuring = phân giã

// var a = array[0];
// var b = array[1];
// var c = array[2];


var [a, , c] = array;

console.log(a,c)


//Rest parameters

var [a, ...rest] = array;
console.log(rest)



var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

// var {name, price, image} = course;
// console.log(name, price, image)


var {name: parenName, children: { name: childrenName }, description = 'default description' } = course;

console.log(parenName, childrenName, description)

// var {name, ...newObject} = course;
// console.log(newOject)


//Spread

