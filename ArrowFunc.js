
const sum = (a,b) => {
    return a+b;
}

let logger1 = log => console.log(log);

logger1('Nguyen Dinh Chi')

console.log(sum(10, 12));

const tong = (c ,d) => c+ d

console.log(tong(100, 200))


const course1 = {
    name1: 'JavaScript basic',
    getName: function() {
        return this.name1;
    }
};

console.log(course1.getName());


const Course = function (name, price) {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('JavaScript basic', 1000);
console.log(jsCourse);