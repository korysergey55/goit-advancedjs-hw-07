# Task 1
The Student class, which contains three properties: name, age, and grade. Instead of declaring these properties in the class body, then in the constructor, and finally assigning them a value, write a shorthand initializer.
```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```
# Task 2
Your task will be to create two classes - Employee and Manager.

The Employee class should include:

name property, which will be available to everyone.
department property, which will only be available inside the Employee class.
salary, which will be available only inside the Employee class and its subclasses.


The Manager class must be a subclass of the Employee class

It is necessary to implement a constructor in the Manager class that will call the constructor of the superclass and increase the salary by 10,000.
```ts
class Employee {
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
 
}
```
# Task 3
You create a game where there are characters with different roles. You are currently working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

Define the ICharacter and ISpellCaster interfaces to match the requirements of the Wizard class. The ICharacter interface should include name and level properties, and even introduce and levelUp methods. The ISpellCaster interface must include a castSpell method.
```ts

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16
```
# Task 4 *
In this task, you have to implement a life scenario where a person, a key and a house interact with each other.

Key: Create a Key class. It must have one private signature property, which is generated randomly when an object of this class is created (eg Math.random()). Also, this class must have a getSignature method that returns the value of the signature property.

Person: Create a Person class. The constructor of this class takes an object of the Key class and stores them in the private key property. The Person class must have a getKey method that returns the stored key.

House: Create an abstract House class. This class has two properties: door, which can be open (true) or closed (false), and key, which stores an object of the Key class. This class should also have a comeIn method that adds a Person object to the tenants array if the door is open. Your abstract House class must also have an abstract OpenDoor method that accepts an object of the Key class.

My House (MyHouse): Create a MyHouse class that inherits from the House abstract class. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key , then the door opens.
After implementing all the classes, create objects for each class and try to recreate the scenario in which a person comes home.


```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```