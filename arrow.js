const factorial = (n)=>{
    return n > 0 ? n * factorial(n - 1) : 1
}

const result=(num)=> factorial(num)
console.log(result(3));