import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployess = true;
  return (
    <div className="App">
      {showEmployess ? (
        <>
          <Employee name="Daniel" role="Dev" />
          <Employee name="Abby" />
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