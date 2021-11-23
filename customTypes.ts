interface Todo {
    name: string;
    // ? mean mean its optional
    completed?: boolean;
}

var todo : Todo = {
    name: 'pick up drycleaning',
    completed:false
}