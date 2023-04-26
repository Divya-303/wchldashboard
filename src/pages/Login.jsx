import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import loginPic from '../assets/images/login-side.jpg';
import { useNavigate, Link } from "react-router-dom";
// import validate from './ValidationRules';

const Login = () => {
    const navigate = useNavigate();
    var errors= {};
    console.log(errors.email);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [values, setValues] = useState({});
    // const [errors, setErrors] = useState({});
    const [authenticated, setAuthenticated] = useState(false);
    // const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticate") || false));
    // const handleChange = e => {
    //     e.persist();
    //     setValues(values => ({
    //         ...values,
    //         [e.target.name]: e.target.value
    //       }));
    //     // setEmail(e.target.value);
    //     // setPassword(e.target.value);
    // };
    const users = [{email: "admin123@gmail.com" , password: "Admin@123"}];
    const handleSubmit = e => {
        e.preventDefault();
        // let email = values.email;
        // let password = values.password;
        console.log(email,password);
        console.log(errors);
        if(!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if(!password) {
            errors.password = "Password is required";
        }else if (password.length < 8) {
            errors.password = "Password must be 8 or more characters";
        } else if (!/\d/.test(password)) {
            errors.password = "Password must contain atleast 1 number";
        } else if (!/[!@#$%&?]/g.test(password)) {
            errors.password = "Password must contain atleast 1 special character";
        } else if (!/[A-Z]/g.test(password)) {
            errors.password = "Password must contain atleast 1 capital letter";
        }
        const account = users.find(user => user.email === email);
        console.log(account);
        if(account && account.password === password){
            console.log(true);
            // localStorage.setItem("authenticated", true);
            setAuthenticated(true);
            navigate("/dashboard");
        } 
        // else {
        //     alert();
        // }
    }
return(
<Container fluid>
  <Row className="vh-100 align-items-center">
    <Col xs={12} xl={5}>
      <div className="mx-auto login-form">
        <form onSubmit={handleSubmit} noValidate>
          <div className="text-center text-light icon-style icon-bg-color p-2 border border-light rounded-circle mx-auto">
            <i className="fa fa-lock" />
          </div>
          <h3 className="text-center">Login</h3>
        <Form.Group className="mb-3 form-control-sm" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className="email-input" type="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        {errors.email && (
                    <span className="help is-danger">{errors.email}</span>
           )}
        </Form.Text>
      </Form.Group>
          {/* <div className="mb-2 form-control-sm">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/> */}
            {/* <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange}/> */}
            {/* {errors.email && (
                    <span className="help is-danger">{errors.email}</span>
           )}
          </div> */}
        <Form.Group className="mb-3 form-control-sm" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="password-input" autoComplete="off" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
          {/* <div className="mb-2 form-control-sm">
            <label htmlFor="loginInputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="loginInputPassword" onChange={(e) => setPassword(e.target.value)} /> */}
            {/* <input type="password" className="form-control" id="loginInputPassword" onChange={handleChange} /> */}
          {/* </div> */}
          <Form.Group className="mb-2 form-check form-control-sm d-flex align-items-center justify-content-center" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="me-2" id="rememberCheck" label="Remember me" />
      </Form.Group>
          {/* <div className="mb-2 form-check form-control-sm d-flex align-items-center justify-content-center">
            <input type="checkbox" className="form-check-input me-2" id="rememberCheck" />
            <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
          </div> */}
          <div className="d-grid">
          <Button className="btn-style" variant="primary" type="submit">
        Login
        </Button>
            {/* <button type="submit" className="btn btn-primary">Login</button> */}
          </div>
          <div className="text-end">
          <Link to="/" className="link-primary">
          Forgot Password
        </Link>
            {/* <a href="#" className="link-primary"></a> */}
          </div>
        </form>
      </div>
    </Col>
    <Col xs={12} xl={6}>
    <Image src={loginPic} className="img-fluid rounded-start" alt="Login Side" />  
      {/* <img src={loginPic} className="img-fluid rounded-start" alt="Login Side" /> */}
    </Col>
  </Row>
</Container>

);
}

export default Login;