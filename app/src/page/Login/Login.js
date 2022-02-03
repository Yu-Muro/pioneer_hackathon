import axios from 'axios';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';


// const API_URL = process
const API_URL = 'https://pixel-drive.herokuapp.com'

const Login = () => {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  
  const loginUser = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", name);
    formData.append("password", password);
    // formData.append("confirmation", password);

    // ,{withCredentials: true}
    await axios.post(`${API_URL}/login`, formData,{withCredentials: false})
    .then(function (response) {
      // 送信成功時の処理
      localStorage.setItem('username', name);
      localStorage.setItem('password',password);

      //セキュリティがばがば
      document.location.href = '/home'
    })
    .catch(function (error) {
      // 送信失敗時の処理
      console.log(error);
      
    });
    setName('')
    setPassword('')
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
        <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
      </form>
      <Link to="/signup">新規登録はこちらから</Link>
    </div>
  )
};

export default Login;
