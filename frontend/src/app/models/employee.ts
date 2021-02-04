
export class Employee {
    constructor(_id = "", name = "", position = "", office = "", salary = 0) {
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }

    name: string
    office: string
    position: string
    salary: number
    createdAt?: string
    updateAt?: string
    _id?: string
}