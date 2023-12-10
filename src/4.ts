interface IKey {
  getSignature():number
}

interface IPerson {
  getKey(): number
}

interface IPersonSignature {
  signature: number
}

interface IHouse {
  door: boolean,
  i_key: number,
  tenants: IPersonSignature[],
  comeIn(person: any): void,
  OpenDoor(personKey: number):void
}

class Key implements IKey{
  private signature: number
  
  constructor() {
    this.signature = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1))) + Math.ceil(1)
  }
  public getSignature() {
    return this.signature
  }
}
const key = new Key();


class Person implements IPerson{
  private key: number

  constructor(signatureKey:number) {
    this.key = signatureKey
  }
  public getKey() {
    return this.key
  }
}
const person = new Person(key.getSignature());


abstract class House implements IHouse{
  public door: boolean
  public i_key: number
  public tenants: IPersonSignature[]

  constructor(key: IPersonSignature ) {
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