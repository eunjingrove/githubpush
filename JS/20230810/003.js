const avengers = ['spiderman', 'thor', 'helk', 'ironman']

avengers.sort();

avengers.sort(function (a, b) {
    // return a - b
    console.log(a, b);
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
});