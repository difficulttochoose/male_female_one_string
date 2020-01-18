const users = [
    { name: 'oleh', gender: 'male', salary: 2500 },
    { name: 'stas', gender: 'male', salary: 800 },
    { name: 'anna', gender: 'female', salary: 500 },
    { name: 'ihor', gender: 'male', salary: 2000 },
    { name: 'olha', gender: 'female', salary: 1000 },
    { name: 'serj', gender: 'male', salary: 1100 },
    { name: 'and', gender: 'male', salary: 430 },
    { name: 'pite', gender: 'male', salary: 2150 },
];

function avg(arr, gender) { return (function (arrFilterd) {return arrFilterd.map(el => el.salary).reduce((total, avg) => { return total + avg }) / arrFilterd.length})(arr.filter(el => el.gender == gender))}

console.log(avg(users, 'male'));