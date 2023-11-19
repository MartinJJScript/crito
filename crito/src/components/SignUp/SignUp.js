import React from 'react'
import './SignUp.css'



const SignUp = () => {
  return (
    <section class="signup">
        <div class="container">
            <h2>Get News Updates By Signup</h2>
            <input type="text" placeholder="username@domain.com"/>
            <button class="button yellow">Subscribe <i class="fa-regular fa-arrow-up-right"></i></button>
        </div>
    </section>
  )
}

export default SignUp