// interfaces

// notes
//  * interfaces will not be added to the main js file they are used for runtime check  
interface Todo {
    name: string;
    completed?: boolean;
    // adding ? after the type name it will make it optional  
}

// lets try making new object and see how ts tell us what to do

var todo: Todo = {name: /* we can only add string here */ 'abebe', completed: false }; 

// lesson 2

interface jQuery {
    (selector: string): HTMLElement;
    version: number;//now version will be always a number
}

var $ = <jQuery>function(selector) {

}
$.version = 12.1
$('.main')