import React, { useState } from 'react'

const Todo = () => {
   const [data,setdata]=useState(['todo 1','todo 2'])
   const [input,setinput]=useState('')
   
   const handelchange=(e)=>{
      setinput(e.target.value)
   }
   const handelsubmit=(e)=>{
      e.preventDefault()
      
      setdata([...data,input])
      setinput('')
   }
   const remove=(value)=>{
      data.splice(value,1)
      setdata([...data])
       
   }
  return (
    <div id={Math.random()}>
      
          <form action="" onSubmit={handelsubmit}>
           <center> <label htmlFor="name">Add Task</label></center>
            <input type="text" name='work' value={input} onChange={handelchange} id='name' />
            <input type="submit" value="submit" id="" />
          </form>

          {
            data.map((item,index)=>{
                  return <div>
                         <h2 key={index}>{item}</h2>
                         <button onClick={()=>remove(index)} id={Math.random()}> Remove</button>
                  </div>
            })
          }
    </div>
  )
}

export default Todo