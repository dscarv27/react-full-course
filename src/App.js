import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
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
            <Employee 
              name="Julia" 
              role="Dev" 
              img="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
            <Employee 
              name="Abby" 
              role={role} 
              img="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
            <Employee 
              name="John" 
              img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
            <Employee 
              name="Michael" 
              role="Dev" 
              img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
            <Employee 
              name="Stuart" 
              role={role} 
              img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
            <Employee 
              name="Mary" 
              img="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            />
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