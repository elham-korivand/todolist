import React, { useState } from "react";
import Forms from "./Forms";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='form-page'>
      <form className='login-form'>
        <label htmlFor='نام کاربری'>
          نام کاربری :
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor='رمز ورود'>
          رمز ورود :
          <input
            type='text'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <div className='button'>
          <Link type='submit' className='btn btn-link' to='/form'>
            ورود
          </Link>
          <button type='button' className='btn ' onClick={() => alert("sghl")}>
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
