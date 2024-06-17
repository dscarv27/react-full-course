import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmplyees] = useState(
    [
      {
        name:"Julia", 
        role:"Manager", 
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
      },
      {
        name:"Abby", 
        role:"Sr Developer",
        img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
      },
      {
        name:"John", 
        role: "Jr Developer",
        img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
      },
      {
        name:"Mary",
        role: "Designer", 
        img:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
      },
      {
        name:"Stuart", 
        role:"Devops", 
        img:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
      },
      {
        name:"Michael", 
        role:"Engineer", 
        img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
      }
    ]
  );
  const showEmployess = true;
  return (
    <div className="App">
      {showEmployess ? (
        <>
          <input type='text' onChange={(e) => {
            setRole(e.target.value);
            }}
          />
        <div className="flex flex-wrap justify-center">
           {employees.map((employee) => {
            return (
              <Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role} 
              img={employee.img} 
              />
            )
           })}
        </div>
        </>
      )
      :
      <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;