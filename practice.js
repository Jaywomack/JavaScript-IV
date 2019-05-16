//Olympia's early hours problem
/*
function buzz() {
    for(let i = 0; i < 100; i ++){
        if(i % 5 === 0 && i % 3 === 0){
            console.log('fizzbuzz')
        } else if(i % 3 === 0){
            console.log('fizz')
        } else if(i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

buzz()
*/
/***********************************************************
 * Javascript Classes Ryan Hamblin
 * Classes in Javascript are not the same as classes in other languages 
 * The class keyword() is syntactic sugar
 * Its all Constructors & Prototypes under the hood
 * This is not a new Object-Oriented inheritance model in JavaScript
 * Should know already how JS classes work by way of learning Constructor Functions and about the Prototype Object
 * Classes in Js are special Functions
 * We will learn about Class declarations
 * Class declarations are not hoisted and have to be declared before they can be used
 */

////set up a class

//declare it

//The constructor function is the glue that binds this all together.
//Anything you need as direct properties on your class will be done through class declaration
//  class Rectangle {
//      constructor(height, width) {
//          this.height = height;
//          this.width = width;
//      }
//  }                  

//  //creating a new object with the class constructor
// const newRect = new Rectangle(400,800);

// console.log(newRect)

// /***************************************************************************************************
//  * Inheritance With Classes
//  * 
//  * The extends will abstract away the .call(this, someAttrs)
//  * The super() function will abstract away any of the funky syntax that we have been using to bind our Objects prototypes to one another
//  * Inheritance with Classes is declarative and obvious which class inherits from which.
//  * Classes are just functions
//  * C
//  */

//  class Animal {
//      constructor(name) {
//          this.name = name;
//      }

//      speak() {
//          console.log(this.name + 'makes a noise')
//      }
//  }

//  class Dog extends Animal {
//      constructor(name) {
//          super(name); ///<-----Super takes care of all of the binding with .call()
//      }

//      speak() {
//          console.log(this.name + 'barks.')
//      }
//  }
////////Classes Ryan Hamblin code along

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} says, 'Hello'`) //The speak method is on the Animal prototype.
//         //It is not a part of the object
//     }
// }

// const ryan = new Animal ('Ryan');
// console.log(ryan)

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks!`)
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} says meow`)
//     }
// }
// const bowWow = new Dog('Grizzly');
// const kitty = new Cat('Fluffertons');
// console.log(bowWow)
// bowWow.speak()
// console.log(kitty);
// kitty.speak()


/***************************************************************************************************
 * Converting Constructors into Classes Ryan Hamblin
 * Class outcome: Be able to convert a pseudo instantiated program into a JavaScript class
 * 
 * Classes are just Constructor functions and by converting old pseudo instantiated programs we gain:
 * Ease of use with Classes
 * Inheritance is trivial to set up
 * Cleaner Code
 * Prototype System for free
 */

//Pseudo instantiated program example
//  function Person(attributes) {
//      this.age = attributes.age;
//      this.name = attributes.name;
//      this.hometown = attributes.hometown;
//  }

//  Person.prototype.speak = function() {
//      return `Hello, my name is ${this.name}`
//  }

//Adding a child and binding it starts to become cumbersome
// Child.prototype.checkIfChild = function() {
//     if(this.isChild) {
//         console.log(`${this.speak} and I am a child object`)
//     }
// };
//Using the Class Constructor 
// class Person {
//     constructor(attributes) {
//         this.age = attributes.age;
//         this.name = attributes.name;
//         this.hometown = attributes.hometown;
//     }

//     speak() {
//         return `Hello, my name is ${this.name}`;
//     }
// }

//adding a child and binding it to the parent
// class Child extends Parent {
//     constructor(childAttrs) {
//         super(childAttrs); ///The binding method that binds this to the parent and allows for inheritance of the parent Objects     
//         this.isChild = childAttrs.isChild; //Special child attributes, unique to the child element
//     }
//     checkIfChild() {
//         if (this.isChild) {
//             console.log(`${this.speak} and I am a child object`)
//         }
//     }
// }

/*************************************************************************************************************
 *  Code Along Converting Constructors in Classes with Ryan Hamblin
 */
// function Fruit(attrs) {
//     this.type = attrs.type;
//     this.name = attrs.name;
//     this.isRipe = attrs.isRipe;
//     this.calories = attrs.calories;
// }

// Fruit.prototype.shipped = function (destination) {
//     console.log(`Shipping ${this.name} to ${destination}`);
// };

// Fruit.prototype.calculateCals = function () {
//     console.log(`Calories in ${this.name} are ${this.calories * 200}`);
// };

// function Banana(bananaAttrs) {
//     Parent.call(this, bananaAttrs);
//     this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
// }

// Banana.prototype = Object.create(Fruit.prototype);

// Banana.prototype.checkIfMonkeysLikeIt = function () {
//     if (this.doMonkeysLikeIt) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function Kiwi(kiwiAttrs) {
//     Fruit.call(this, kiwiAttrs);
//     this.isFuzzy = kiwiAttrs.isFuzzy;
// }

// Kiwi.prototype = Object.create(Fruit.prototype);

// Kiwi.prototype.checkIfFuzzy = function () {
//     if (this.isFuzzy) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const newBanana = new Banana({
//     doMonkeysLikeIt: true,
//     type: 'Tree',
//     name: 'Banana',
//     isRipe: false,
//     calories: 0.1
// });

// const newKiwi = new Kiwi({
//     isFuzzy: true,
//     type: 'Tree',
//     name: 'Kiwi',
//     isRipe: false,
//     calories: 0.7
// });

// console.log(newBanana.shipped('Alaska'));
// console.log(newKiwi.shipped('Colorado'));
// console.log(newBanana.checkIfMonkeysLikeIt());
// console.log(newKiwi.checkIfFuzzy());
// console.log(newBanana.calculateCals());
// console.log(newKiwi.calculateCals());

//Converted to Classes
// function Fruit(attrs) {
//     this.type = attrs.type;
//     this.name = attrs.name;
//     this.isRipe = attrs.isRipe;
//     this.calories = attrs.calories;
//   }
class Fruit {
    constructor(attrs) {
        this.type = attrs.type;
        this.name = attrs.name;
        this.isRipe = attrs.isRipe;
        this.calories = attrs.calories;
    }
    shipped(destination) {
        console.log(`Shipping ${this.name} to ${destination}`);

    }
    calculateCals() {
        console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    };

}



class Banana extends Fruit {
    constructor(bananaAttrs) {
        super(bananaAttrs); //Call the super() everytime I extend a parent class
        this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;

    }

    checkIfMonkeysLikeIt() {
        if (this.doMonkeysLikeIt) {
            return true;
        } else {
            return false;
        }
    };
}



class Kiwi extends Fruit {
    constructor(kiwiAttrs) {
        super(kiwiAttrs);
        this.isFuzzy = kiwiAttrs.isFuzzy;

    }
    checkIfFuzzy() {
        if (this.isFuzzy) {
            return true;
        } else {
            return false;
        }
    }
}



const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
});

const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
});

console.log(newBanana.shipped('Alaska'));
console.log(newKiwi.shipped('Colorado'));
console.log(newBanana.checkIfMonkeysLikeIt());
console.log(newKiwi.checkIfFuzzy());
console.log(newBanana.calculateCals());
console.log(newKiwi.calculateCals());

/******************************************************************************************
 * Josh Knells Lecture JavaScript IV
 * 'Automagically' hahaha
 * = assign the value of NOT equals
 * new = new binding of this keyword
 * {} = Object literal
 */



/******************************************************************************************************
 * Dan Sherman's Lecture
 * classes
 * Converting constructors into Classes
 *   */

//  function Parent(attributes) {
//     this.age = attributes.age;
//     this.location = attributes.location;
//     this.name = attributes.name;
//     this.phrase = attributes.phrase;
//   }
//Rewrite code into new syntax below
class Parent {
    constructor(attributes) {
        this.age = attributes.age;
        this.location = attributes.location;
        this.name = attributes.name;
        this.phrase = attributes.phrase;
    }

    speak() {
        return `${this.name} says ${this.phrase}`;
    }
}


// Parent.prototype.speak = function () {
//     return `${this.name} says ${this.phrase}`;
// }

// function Child(attributes) {
//     Parent.call(this, attributes);
//     this.toy = attributes.toy;

// }

class Child extends Parent {
    constructor(childAttributes){
        super(childAttributes)

    };
}

const Fred = new Parent({
    age: 35,
    name: 'Fred',
    location: 'Bedrock',
    phrase: 'Yabba Dabba Do'

})

Child.prototype = Object.create(Parent.prototype);
Child.prototype.play = function () {
    return `${this.name} plays with ${this.toy}`
}

const pebbles = new Child({
    age: 2,
    name: 'Pebbles',
    location: 'Bedrock',
    phrase: 'MA MA',
    toy: 'rock'
})

console.log(pebbles.play())
console.log(pebbles.speak())