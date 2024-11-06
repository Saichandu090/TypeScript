"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0); // If not initialized through constructor or for just declaring ,use '!' after variable name like [id!:number] ,only if not initialized
        __classPrivateFieldSet(this, _Employee_id, id, "f"); // # represents a private variable and we can use private keyword as well
        this.name = name;
        this.address = address;
    }
    static getNumber() {
        return 50;
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    getAddressWithName() {
        return `${this.name} stays at ${this.address}`; // Another way of concatinating
        //return this.name + " " + this.address;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getAddressWithName() {
        return `${this.name} is manager at ${this.address}`;
    }
}
let chandu;
chandu = new Employee(1, "Sai chandu", "Pune");
//chandu.id=1;
//chandu.name="Chandu"; Protected members only accessed within the class and its subclasses. Can't access them outside just like private.
// chandu.address="pune";
console.log(chandu);
console.log(chandu.getAddressWithName()); // While calling a method always use paranthesis () orelse will get the method name in console
let jenny = new Manager(1, "Jenisha", "Nepal");
console.log(jenny.getAddressWithName());
console.log("Number is " + Employee.getNumber());
chandu.empId = 45;
console.log(chandu.empId);
