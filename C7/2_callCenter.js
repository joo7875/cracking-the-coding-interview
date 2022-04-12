class Employee {
    constructor() {
        this.respondent = [];
        this.manager = [];
        this.director = [];
    }

    setup(respondent, manager, director) {
        for (let i = 0; i < respondent; i++) this.respondent.push(0);
        for (let i = 0; i < manager; i++) this.manager.push(0);
        for (let i = 0; i < director; i++) this.director.push(0);
    }

    clear() {
        this.respondent = [];
        this.manager = [];
        this.director = [];
    }
}

class Call {
    constructor() {
        this.call = null;
        this.employee = new Employee();
        this.employee.setup(1, 3, 3);
    }

    resetEmployee() {
        this.employee.clear();
    }

    dispatchCall(call) {
        this.call = call;
        
        let respondent = this.employee.respondent;
        let manager = this.employee.manager;
        let director = this.employee.director;

        if (respondent.length > 0 && respondent.includes(0)) {
            let idx = respondent.indexOf(0);
            respondent[idx] = call;
        }
        else if (manager.length > 0 && manager.includes(0)) {
            let idx = manager.indexOf(0);
            manager[idx] = call;
        }
        else if (director.length > 0 && director.includes(0)) {
            let idx = director.indexOf(0);
            director[idx] = call;
        }
        else console.log('Employees not available');
    }


}

const call = new Call();
call.dispatchCall(1);
call.dispatchCall(2);
call.dispatchCall(3);
call.dispatchCall(4);
call.dispatchCall(5);
call.dispatchCall(6);
call.dispatchCall(7);
call.dispatchCall(8); // Employees not available

// call.resetEmployee();

console.log(call)
