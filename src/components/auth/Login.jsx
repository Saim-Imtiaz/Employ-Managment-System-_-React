import { useState } from "react";

function Login({handleLogin}) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin (email, password)


    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className="border-2 border-emerald-600 p-24 rounded-xl">
        <form onSubmit={(e)=> {submitHandler(e)}} className="flex flex-col justify-center items-center">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter Your Email" className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-2 px-6 placeholder:text-gray-400"/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter Password" className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg rounded-full py-2 px-6 placeholder:text-gray-400 mt-3"/>
          <button className="mt-7 text-white outline-none border-none bg-emerald-600 hover:bg-emerald-700 font-semibold rounded-full py-2 px-8 text-lg w-full placeholder:text-white cursor-pointer">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login