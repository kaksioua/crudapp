import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [salary, setSalary] = useState('')
  const [date, setDate] = useState('')
  const handelAdd = (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required',
        showConfirmButton: true,
      })
    }
    const id = employees.length + 1
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    employees.push(newEmployee)
    localStorage.setItem('employees_data', JSON.stringify(employees))
    setEmployees(employees)
    setIsAdding(false)
    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${firstName} ${lastName}'s data has been Added`,
      showConfirmButton: false,
      timer: 1500,
    })
  }
  return (
    <div className="small-container">
      <form onSubmit={handelAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firsName">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary $</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="add" />
          <input
            type="button"
            value="cancel"
            onClick={() => setIsAdding(false)}
            className="muted-button"
            style={{ marginLeft: '30px' }}
          />
        </div>
      </form>
    </div>
  )
}

export default Add
