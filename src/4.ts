
interface IPerson {
  signature: number
}

class Key {
  private signature: number
  
  constructor() {
    this.signature = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1))) + Math.ceil(1)
  }
  public getSignature():number {
    return this.signature
  }
}
const key = new Key();


class Person {
  private key: number

  constructor(signatureKey:number) {
    this.key = signatureKey
  }
  public getKey(): number {
    return this.key
  }
}
const person = new Person(key.getSignature());


abstract class House {
  public door: boolean
  public i_key: number
  public tenants: IPerson[]

  constructor(key: IPerson ) {
    this.door  = false
    this.tenants = []
    this.i_key = key.signature
  }
  public comeIn(person: any): void {
      if (this.door) {
      this.tenants.push(person)
    }
  }
  public OpenDoor(personKey: number): void {
     console.log(personKey)
  }
}

class MyHouse extends House{
  constructor(public key:any) {
    super(key)
  }
  public OpenDoor(personKey: number): void {
     if (this.i_key === personKey) {
       this.door = true
    }
  }
}

const house = new MyHouse(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

console.log(house)


export {};