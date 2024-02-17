import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id
  const [firstName, setFirstName] = useState(selectedEmployee.firstName)
  const [lastName, setLastName] = useState(selectedEmployee.lastName)
  const [email, setEmail] = useState(selectedEmployee.email)
  const [date, setDate] = useState(selectedEmployee.date)
  const [salary, setSalary] = useState(selectedEmployee.salary)

  const handleUpdate = (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required',
        showConfirmButton: true,
      })
    }
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee)
        break
      }
    }
    localStorage.setItem('employees_data', JSON.stringify(employees))
    setEmployees(employees)
    setIsEditing(false)

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been Updated`,
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edite Employee</h1>
        <label htmlFor="firsName">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary $</label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            type="button"
            value="cancel"
            onClick={() => setIsEditing(false)}
            className="muted-button"
            style={{ marginLeft: '30px' }}
          />
        </div>
      </form>
    </div>
  )
}
export default Edit
