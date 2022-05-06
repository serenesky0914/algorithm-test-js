function solution(A) {
    var i = 0;
    var diff = [];
    var count = 0;
    
    for(i=0; i<A.length; i++) {
        if(typeof diff[A[i]] == 'undefined') {
            diff[A[i]] = 1;
            count++;
        }
    }
    
    console.log(diff)
    for(i=0; i<A.length; i++) {
        if(diff[A[i]] === 1) {
            diff[A[i]] = 0;
            count--;
            
            if(count === 0) {
                return i;
            }
        }
    }
    
}

[
    [2,2,1,0,1],
    [2,1,0,3,5,4,2,1]
].forEach(
    (A) => console.log(solution(A))
)
