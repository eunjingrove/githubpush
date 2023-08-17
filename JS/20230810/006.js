// 로또

// var arr1 = [];

// for (let i = 0; i < 6; i++) {
//     arr1.push(parseInt(Math.random() * 45 + 1));
// }

// console.log(arr1);

function lottoGenerater() {
    const lottoArr = [];

    while (lottoArr.length < 6) {
        const result = parseInt(Math.random() * 45 + 1);

        if (!lottoArr.includes(result)) {
            lottoArr.push(result);
        }
    }
    return lottoArr.sort((a, b) => a - b);
}

console.log(lottoGenerater());
