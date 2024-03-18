
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';

function App({props}) {
  return (
    <>
      <NavBar props={props}/> {/** Passing props object to NavBar component for assembling nav and menu item links */}
      <LoginForm />
    </>
  );
}

export default App; 
