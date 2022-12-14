function solution(n) {
    let num = n;

    return function add5(n) {
        return num + n;
    },
    function add7(n) {
        return num + n;
    }
}
let add5 = solution(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8

let add7 = solution(7);
console.log(add7(2)); // 9
console.log(add7(3)); // 10

//========================================================
// bind 
function solution(number) {
    function add(a,b){
        return a + b
    }
    return add.bind(this, number) // this защото не ни интересува контекста просто да се предаде нататък
}
let add5 = solution(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8