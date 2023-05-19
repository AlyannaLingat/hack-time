import React, { useState } from "react";
import { useNavigate } from "react-router";


function Login() {
  const navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin1",
      password: "pass1"
    },
    {
      username: "admin2",
      password: "pass2"
    }
  ];

  const errors = {
    Uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { Uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === Uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "Uname", message: errors.Uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <div className="admin">Admin</div>
        <div className="login">Login</div>
        <div className='email'>
          <label>Username </label>
          <input className="input1" type="text" name="Uname" required />
          {renderErrorMessage("Uname")}
        </div>
        <div className='pass'>
          <label>Password </label>
          <input className="input2" type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div  >
          <input className="submit" type="submit" />
        </div>
        <div className="HT">HackTime</div>
        <div className="Tracker">Date & Time Hacktime Employee Tracker</div>


      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? navigate('/dashboard'): renderForm}
      </div>
    </div>
  );
}

export default Login;