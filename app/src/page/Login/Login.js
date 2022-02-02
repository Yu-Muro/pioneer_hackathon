import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');


  const createUser = ()=>{
    console.log("###",name,password)
  }


  return (
    <div className='my-4'>
      <div className='text-center'>
        <img className='w-50' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
        <p className='h3 my-3 '>Please Login</p>
      </div>
      <form>
        <div className="form-group">
          <label>Your Nick Name</label>
          <input type="text" className="form-control" id="user_name"  placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="user_password" className="form-control" id="user_password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={createUser}>Login</button>
      </form>
      <Link to="/signup">新規登録はこちらから</Link>
    </div>
  )
};

export default Login;
