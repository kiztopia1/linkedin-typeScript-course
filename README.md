# cheat sheet 

> To Start a ts compiler ``` > tsc -w ./app.ts ``` the -w if for wait 


## 1 Specifying javaScript types


**In TypeScript we need to avoid the ```any``` type as possible**

```
let sum = (x:string, y:string): number => {
    let total: number = x.length + y.length
    return total;
}

```
> to specify the type of a variable we use : after the variable

**if you need the the variable to have two types**
> we use the or ( | ) operator 

```
let a:(string | any[]) = 'name'
a=[343]
```

## 2 Custom Types
In typeScript We can add Our Own Types in Several ways
>Interface
```
interface Todo {
    name: string;
    // ? mean mean its optional
    completed?: boolean;
}

var todo: Todo = {
    name: 'pick up drycleaning',
    completed:false
}
```