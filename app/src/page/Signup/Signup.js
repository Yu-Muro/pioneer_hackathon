import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const API_URL = 'https://pixel-drive.herokuapp.com'



const Signup = () => {
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');


  const createUser = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", name);
    formData.append("password", password);

    await axios.post(`${API_URL}/register`, formData)
    .then(function (response) {
      // 送信成功時の処理
      console.log(response);
    })
    .catch(function (error) {
      // 送信失敗時の処理
      console.log(error);
  });
  }

  return (
    <div className='my-3'>
      <div className='text-center'>
        <img className='w-50' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
        <p className='h3 my-3 '>Please Signup</p>
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
      <Link to="/login">ログインはこちらから</Link>
    </div>
  )
};

export default Signup;
