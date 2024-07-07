import 'remixicon/fonts/remixicon.css'
import React, { useState } from 'react'
import './App.css'

const model = {
  fullname: '',
  class: '',
  subject: '',
  roll: '',
  dob: '',
}

const App = () => {
  const [editIndex, setEditIndex] = useState(null)
  const [right, setRight] = useState(-450)
  const [students, setStudents] = useState([])
  const [form, setForm] = useState(model)

  const handleDrawer = () => {
    setRight(0)
  }

  const handleInput = (e) => {
    const input = e.target
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]: value
    })
  }

  const createStudent = (e) => {
    e.preventDefault()
    setStudents([...students, form])
    setForm(model)
    setRight(-450)
  }


  const deleteStudent = (index) => {
    const backup = [...students]
    backup.splice(index, 1)
    setStudents(backup)
  }

  const editStudent = (index) => {
    setRight(0)
    setForm(students[index])
    setEditIndex(index)
  }

  const saveStudent = (e) => {
    e.preventDefault()
    const backups = [...students]
    backups[editIndex] = form
    setStudents(backups)
    setForm(model)
    setEditIndex(null)
    setRight(-450)
  }

  const closeDrawer = () => {
    setRight(-450)
    setForm(model)
    setEditIndex(null)
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
        }}>React Crud App</h1>
        <button
          onClick={handleDrawer}
          style={{
            border: "none",
            background: "#8407ba",
            color: "white",
            padding: "14px 22px",
            borderRadius: "4px",
            fontSize: "16px",
            margin: "16px"
          }}>
          <i className="ri-user-add-line" style={{ marginRight: "5px" }}></i>
          New Student
        </button>
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
            {
              students.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.fullname}</td>
                  <td>{value.subject}</td>
                  <td>{value.class}</td>
                  <td>{value.roll}</td>
                  <td>{value.dob}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => editStudent(index)}
                        style={{
                          height: "32px",
                          width: "32px",
                          borderRadius: "4px",
                          border: "none",
                          background: "green",
                          color: "white",
                          marginRight: 12
                        }}><i className="ri-image-edit-fill"></i></button>
                      <button
                        onClick={() => deleteStudent(index)}
                        style={{
                          height: "32px",
                          width: "32px",
                          borderRadius: "4px",
                          border: "none",
                          background: "red",
                          color: "white"
                        }}><i className="ri-chat-delete-line"></i></button>
                    </div>
                  </td>
                </tr>
              ))
            }
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
        transition: "0.2s"
      }}>
        <button
          onClick={closeDrawer}
          style={{
            border: "none",
            fontSize: "20px",
            background: "white",
            position: "absolute",
            top: "20px",
            right: "20px"
          }}><i className="ri-close-circle-line"></i></button>
        <h1>New Student</h1>
        <form
          onSubmit={editIndex === null ? createStudent : saveStudent}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px"
          }}>
          <input
            spellCheck='true'
            value={form.fullname}
            onChange={handleInput}
            required
            name='fullname'
            type="text"
            placeholder='Enter your fullname..'
            style={{
              border: "1px solid #ccc",
              padding: 16,
            }} />
          <input
            value={form.class}
            onChange={handleInput}
            required
            name='class'
            type="number"
            placeholder='Enter your class..'
            style={{
              border: "1px solid #ccc",
              padding: 16,
            }} />
          <input
            value={form.roll}
            onChange={handleInput}
            required
            name='roll'
            type="number"
            placeholder='Enter your roll no..'
            style={{
              border: "1px solid #ccc",
              padding: 16,
            }} />
          <input
            value={form.subject}
            onChange={handleInput}
            required
            name='subject'
            type="text"
            placeholder='Enter your subject..'
            style={{
              border: "1px solid #ccc",
              padding: 16,
            }} />
          <input
            value={form.dob}
            onChange={handleInput}
            required
            name='dob'
            type="date"
            style={{
              border: "1px solid #ccc",
              padding: 16,
            }} />
          {
            editIndex === null ? <button style={{
              border: "none",
              background: "#8407ba",
              color: "white",
              fontSize: "16px",
              padding: "14px 25px"
            }}>SUBMIT</button>
              : <button style={{
                border: "none",
                background: "deeppink",
                color: "white",
                fontSize: "16px",
                padding: "14px 25px"
              }}>SAVE</button>
          }


        </form>
      </aside>
    </div>
  )
}

export default App
