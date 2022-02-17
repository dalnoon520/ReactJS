//1. Định nghĩa key; value cho object
//2. định nghĩa method cho object
//3. định nghĩa key cho object dưới dạng biến

var name = 'JavaScript'
var price = 100;


var course = {
    name,
    price,
    getName() {         //=> định nghĩa method cho object
        return name;
    }
};

console.log(course)
console.log(course.getName())



var fieldName = 'name';
var fieldPrice = 'price';

const courses = {
    [fieldName]: 'JavaScript basic',
    [fieldPrice]: 1000
}

console.log(courses)