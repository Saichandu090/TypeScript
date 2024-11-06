class Employee {
    #id: number; // If not initialized through constructor or for just declaring ,use '!' after variable name like [id!:number] ,only if not initialized
    protected name: String;
    address: String;

    constructor(id: number, name: string, address: string) { // We can't have multiple constructors either default or one custom 
        this.#id = id; // # represents a private variable and we can use private keyword as well
        this.name = name;
        this.address = address; 
    }

    static getNumber():number{
        return 50;
    }

    set empId(id:number){
        this.#id=id;
    }

    get empId():number{
        return this.#id;
    }

    getAddressWithName(): string { // Method inside a class
        return `${this.name} stays at ${this.address}` // Another way of concatinating
        //return this.name + " " + this.address;
    }
}

class Manager extends Employee
{
    constructor(id:number,name:string,address:string){
        super(id,name,address);
    }

    getAddressWithName(): string {
        return `${this.name} is manager at ${this.address}`;
    }
}

let chandu : Employee;
chandu = new Employee(1, "Sai chandu", "Pune");
//chandu.id=1;
//chandu.name="Chandu"; Protected members only accessed within the class and its subclasses. Can't access them outside just like private.
// chandu.address="pune";

console.log(chandu);
console.log(chandu.getAddressWithName()) // While calling a method always use paranthesis () orelse will get the method name in console

let jenny=new Manager(1,"Jenisha","Nepal");
console.log(jenny.getAddressWithName()); 


console.log("Number is "+Employee.getNumber());
chandu.empId=45;
console.log(chandu.empId) // calling getter dont need a paranthesis () 