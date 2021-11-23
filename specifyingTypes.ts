let sum = (x:string, y:string): number => {
    let total: number = x.length + y.length
    return total;
}

console.log(sum('name', 'aha'))

// if you need the the variable to have two types
// we use the or ( | ) operator 

let a:(string | any[]) = 'name'
a=[343]