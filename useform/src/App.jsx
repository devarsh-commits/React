import { application } from 'express';
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();
  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), t * 1000);
    })
  }
  const onsubmit = async (data) => {
    await delay(3); //addind delay of 3 secons of loading
    // let r = await fetch('http://localhost:3000/',
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }, 
    //     body: JSON.stringify(data)
    //   });
    // let res = await r.text();
    console.log(data);
  }
  return (
    <>
      {isSubmitting && (<div> Loading...</div>)}
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input type="text" {...register("username", { required: { value: true, message: 'pls fill the username' }, })} placeholder='Enter your name' />
        {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
        <br /><br /><br />
        <input type="password" placeholder='Enter your password' {...register("password", { required: { value: true, message: "FIll the password" }, minLength: { value: 3, message: "Password more than 3 char" } })} />
        {errors.password && alert(errors.password.message)}
        <br /><br /><br />
        <input disabled={isSubmitting} type="submit" value='submit' />
        {/* wrritng a custom error using setError */}
        {/* {isSubmitted&&(alert('your data is submitted'))} */}

      </form>
    </>
  )
}

export default App
