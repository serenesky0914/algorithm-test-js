var N;
var A;
N = 5;
A = Array.from({ length: N }, () => Math.floor(Math.random() * N * 1));
console.log(A);

function minimum(data) {
    if (data.length === 1) return data[0];

    const first = data[0]
    const second = data[1]
    if (first >= second) return minimum(data.slice(1));
    data.splice(1, 1);
    return minimum(data);
}

function solution(param) {
    var i = 0;
    while (i < param.length) {
        if (param[i] == minimum(param)) {
            return i;
            break;
        }
        i = i + 1;
    }

}

// Output minIndex
console.log("solution : ", solution(A));