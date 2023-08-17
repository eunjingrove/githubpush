const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

const props = Object.keys(person);
console.log(props);
for (let i = 0; i < props.length; i++) {
    console.log(`key: ${props[i]} , value : ${person[props[i]]} `);
}

const pro = Object.keys(person);
for (let i = 0; i < pro.length; i++) {
    console.log(`key: ${pro[i]}, value: ${person[pro[i]]}`)
}
