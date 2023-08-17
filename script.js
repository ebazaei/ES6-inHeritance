//ES6 inHeritance
//به ارث بردن ویژگش های والد در کلاس 
console.log("----ES6 inHeritance----");


class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + 'Makes a noise')
    }
}

class Dog extends Animal{
    speak(){
        console.log(this.name + ' braks ');
    }
}

let dog = new Dog('Rex');
dog.speak(); //Rex braks


// Super فراخوانی والدین
console.log("----Super keyword ----");

class Animal2{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + 'Makes a noise')
    }
}

class Dog2 extends Animal2{
    speak(){
        super.speak() //فراخوانی والدین
        console.log(this.name + ' braks ');
    }
}

let dog2 = new Dog2('Rex'); //Rex Makes a notis
dog2.speak(); //Rex braks

