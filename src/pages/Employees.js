import '../App.css';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Employee from '../components/Employee';
// import Header from '../components/Header';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Employees(){
  const [employees, setEmplyees] = useState(
    [
      {
        id: 1,
        name:"Julia", 
        role:"Manager", 
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
      },
      {
        id: 2,
        name:"Abby", 
        role:"Sr Developer",
        img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
      },
      {
        id: 3,
        name:"John", 
        role: "Jr Developer",
        img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
      },
      {
        id: 4,
        name:"Mary",
        role: "Designer", 
        img:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
      },
      {
        id: 5,
        name:"Stuart", 
        role:"Devops", 
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
      },
      {
        id: 6,
        name:"Michael", 
        role:"Engineer", 
        img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
      },
      {
        id: 7,
        name:"Carolina", 
        role:"QA", 
        img:"https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg"
      },
      {
        id: 8,
        name:"Matt", 
        role:"Cyber Secutiry", 
        img:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id){
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmplyees(updatedEmployees);
  }

  function newEmployee(name, role, img){
   const NewEmployee = {
      id: uuidv4(),
      name: name,
      role: role, 
      img: img
    }
    setEmplyees([...employees, NewEmployee])
  }

  const showEmployess = true;
  return (
    <div>
      {showEmployess ? (
        <>
          {/* <input type='text' onChange={(e) => {
            setRole(e.target.value);
            }}
          /> */}
        <div className="flex flex-wrap justify-center">
           {employees.map((employee) => {
            // const EditEmployee = (
            //   <EditEmployee 
            //     id={employee.id}
            //     name={employee.name} 
            //     role={employee.role} 
            //     updateEmployee={updateEmployee}
            //   />
            // );
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                editEmployee={<EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />}
              />
            )
           })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;