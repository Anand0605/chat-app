import 'remixicon/fonts/remixicon.css'
import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [right, setRight] = useState(-450)

  const handleDrawer =()=>{
    setRight(0)
  }
  return (
    <div style={{
      backgroundColor: "#ddd",
      minHeight: "100vh"
    }}>
      <div style={{
        width: "70%",
        background: "white",
        margin: "32px auto",
        padding: "32px"
      }}>
        <h1 style={{
          padding: "0",
          margin: "0",
          textAlign: "center"
        }}> React Crud App</h1>
        <button
        onClick={handleDrawer}
         style={{
          border: "none",
          background: "#8407ba",
          color: "white",
          padding: "14px 22px",
          borderRadius: "4px",
          fontSize: "16px",
          margin:"16px"
        }}>
          <i className="ri-user-add-line" style={{ marginRight: "5px" }}></i>
          New Student</button>
          <table className='crud-app'>
            <thead>
              <tr>
                <th>S/No</th>
                <th>Student's name</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Roll.No</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
                <td>
                  <div>
                    <button style={{
                      height:"32px",
                      width:"32px",
                      borderRadius:"4px",
                      border:"none",
                      background:"green",
                      color:"white",
                      marginRight:12

                    }}><i className="ri-image-edit-fill"></i></button>
                    <button style={{
                      height:"32px",
                      width:"32px",
                      borderRadius:"4px",
                      border:"none",
                      background:"red",
                      color:"white"

                    }}><i class="ri-chat-delete-line"></i></button>
                  </div>
                </td>
              </tr>
              {/* <tr>
                <td>2</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Er.Niket</td>
                <td>React</td>
                <td>19133</td>
                <td>B.tech(cse)</td>
                <td>27/11/2002</td>
              </tr> */}
              </tbody>
          </table>
      </div>
      <aside style={{
        position: "fixed",
        top: "0",
        right: right,
        width: 450,
        backgroundColor: "white",
        height: "100%",
        padding: 32,
        boxShadow: '0 0 40px rgba(0,0,0,0.2)',
        boxSizing: "border-box",
        transition:"0.2"
      }}>
        <button 
        onClick={()=>setRight(-450)}
        style={{border:"none",
          fontSize:"20px",
          background:"white",
          position:"absolute",
          top:"20px",
          right:"20px"
          }}><i className="ri-close-circle-line"></i></button>
        <h1>New Student</h1>
        <form style={{
          display:"flex",
          flexDirection:"column",
          gap:"30px"}}>
          <input
          required
          name='Fullname'
           type="text"
           placeholder='Enter your fullname..'
           style={{border:"1px solid #ccc",
            padding:16,}} />
          <input
          required
          name='Classname'
           type="Number"
           placeholder='Enter your Classname..'
           style={{border:"1px solid #ccc",
            padding:16,}} />
          <input
          required
          name='Roll.No'
           type="Number"
           placeholder='Enter your Roll.No..'
           style={{border:"1px solid #ccc",
            padding:16,}} />
          <input
          required
          name='Subject'
           type="Number"
           placeholder='Enter your Subject..'
           style={{border:"1px solid #ccc",
            padding:16,}} />
          <input
          required
          name='DOB'
           type="date"
           placeholder='Enter your date..'
           style={{border:"1px solid #ccc",
            padding:16,}} />
            <button style={{
              border:"none",
              background:"#8407ba",
              color:"white",
              fontSize:"16px",
              padding:"14px 25px"}}>SUBMIT</button>
        </form>
      </aside>
    </div>
  )
}

export default App