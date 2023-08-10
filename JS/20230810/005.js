const studentList = [
    {
        id: 1, name: '원범', score: 'great'
    },
    {
        id: 2, name: '김진', score: 'so cute'
    },
    {
        id: 3, name: '혜원', score: 'good good'
    },
    {
        id: 4, name: '재현', score: 'too cool for school'
    }
]

studentList.forEach(function (v) {
    console.log(v.name);
    //console.log(v['name']) 대괄호로 접근하려면 문자열로 써야한다. 
})

// 스코어만 따로 새로운 배열 만들기
studentList.map(v => v.score);