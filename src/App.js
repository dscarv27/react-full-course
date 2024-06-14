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
            <Employee name="Daniel" role="Dev" />
            <Employee name="Abby" role={role}/>
            <Employee name="John" />
        </>
      )
      :
      <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;