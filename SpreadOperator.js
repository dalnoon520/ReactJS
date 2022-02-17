// function logger(obj) {
//     console.log(obj.name)
//     console.log(obj.price)
// }


function logger({name, price, ...rest}) {
    console.log(name)
    console.log(price)
    console.log(rest)
}

logger({
    name: 'JavaScript',
    price: 1000,
    description: 'Description content'
})


// Noi 2 arrays vao voi nhau

var array1 = ['JavaScript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2, ...array1];

console.log(array3)

// doi voi doi tuong object

var object1 = {
    name: 'ReactJS'
};

var object2 = {
    price: 2000
}

var object3 = {
    ...object1, ...object2
}

console.log(object3)

//VD

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://trang-bai-tap'
};


console.log(exerciseConfig)


//VD

function logger (a,b,c){
    console.log(a,b,c)
}

logger(...array1)


function loggerRest(...rest) {
    for (var i = 0; i< rest.length; i++) {
        console.log(rest[i])
    }
}

loggerRest(...array1)