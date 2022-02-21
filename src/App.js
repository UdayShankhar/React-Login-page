
import './App.css';

function App() {
  const Rememberme = () => {
    alert("Browser will save your details");
  }
  const Thanks = () => {
    alert("Thanks for logging-in!");
  }
  return (
    <div className='login-form'>
      <div className='login'>
        <h1>React JS</h1><br></br>
      </div>
      <form className='details'>
        <div className='login-details'>
          <input type="text" className='username' placeholder='Username'></input><br></br><br></br>
          <input type="password" className='password' placeholder='Password'></input><br></br><br></br></div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={Rememberme} ></input>
          <label class="form-check-label" for="flexSwitchCheckDefault">Remember Me</label>
        </div>
        <button type='login' className='btn' onClick={Thanks} >Login</button>
      </form>
      <div className='icons' >
        <a href="#" className="fa fa-facebook"></a>
        <a href="https://twitter.com/?lang=en-in" className="fa fa-twitter"></a>
        <a href="#" className='fa fa-linkedin'></a>
        <a href="#" className='fa fa-instagram'></a>
      </div>
    </div>
  );
}

export default App;
