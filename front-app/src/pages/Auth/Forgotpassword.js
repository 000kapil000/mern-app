import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Forgotpassword = () => {
  // const location=useLocation()
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [answer,setAnswer]=useState('')

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgotpassword", {
        email,
        newpassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
     
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={'forgot password Ecommerce app'}>
    <div className="form-container ">
    <form onSubmit={handleSubmit}>
      <h4 className="title">Reset Password</h4>

      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Your Email "
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter New Password"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter your birth city"
          required
        />
      </div>
      
    
      <button type="submit" className="btn btn-primary">
      Reset
      </button>
    </form>
  </div>
    </Layout>
 
  )
}

export default Forgotpassword