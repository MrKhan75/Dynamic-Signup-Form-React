import './App.css'

function App() {
  

  return (
    <>

      <div className="mainContainer bg-sky-200 h-screen">
          <div className='container mx-auto md:px-10 flex justify-center items-center h-full'>
                <div className='w-[400px] bg-slate-100 p-5 rounded-md'>
                      <h3 className='text-center text-xl font-semibold pb-5'>Dynamic Signup Form</h3>
                      <div>
                         <form action="#" method='post'>
                           <label htmlFor="name"><span className='block text-base font-semibold my-1'>Name : </span>
                              <input className='py-2 bg-slate-200 pl-4 w-full text-base rounded-md focus:outline-none' type="text" id='name' placeholder='Enter Your Name' required/>
                           </label>
                           <label htmlFor="name"><span className='block text-base font-semibold my-1'>Email : </span>
                              <input className='py-2 bg-slate-200 pl-4 w-full text-base rounded-md focus:outline-none' type="email" id='email' placeholder='Enter Your Email' required/>
                           </label>
                           <label htmlFor="name"><span className='block text-base font-semibold my-1'>Password : </span>
                              <input className='py-2 bg-slate-200 pl-4 w-full text-base rounded-md focus:outline-none' type="password" id='password' placeholder='Enter Your Password' required/>
                           </label>

                           <input className='mt-4' type="checkbox" name="check" id="checkbox" /><span className='ml-3 text-gray-500 text-md'>if you'r agree with our terms and Conditions</span>

                            <div className='mt-4'>
                                <input className='w-full text-base font-semibold bg-sky-400 py-2 rounded-md text-white' type="submit" value="Signup" id="submit" />
                            </div>
                          </form>
                      </div>
                </div>
          </div>
      </div>
      
     
    </>
  )
}

export default App
