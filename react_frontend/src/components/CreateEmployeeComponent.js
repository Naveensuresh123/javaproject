import React from 'react'
import{useState}from 'react'
import{useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() 
{

   const navigate=useNavigate();
  const [employee,setEmployee]=useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const saveHandler=(e)=>
  {
    e.preventDefault();
    EmployeeService.createEmployee(employee).then(res=>
    {
        navigate("/employee");
    }

    )
  }
  const handleClick=(e)=>
  {
     const name=e.target.name;
     const value=e.target.value;
     setEmployee({...employee})
  } 
     const cancelHandler=()=>
        {
            navigate("/employees");
        } 
  return (
    <div className='container mt-4'>
    <div className='card w-50 offset-md-3'>
    <h3 className='text-center mt-3'>Add Employee</h3>
    <div className='card-body'>
        <form>
            <div className='form-group my-3'>
                <label>First Name:</label>
                <input type="text" name="firstName" id="firstName"
                className='form-control'autoComplete='off'
                value={employee.firstName}
                onChange={handleClick}/>
            </div>
            <div className='form-group my-3'>
                <label>last Name</label>
                <input type="text" name="lastName" id="lastName"
                className='form-control' autoComplete='off'
                value={employee.lastName}
                onChange={handleClick}/>
            </div>
            <div className='form-group my-3'>
                <label>Email:</label>
                <input type="text" name="email" id="email"
                className='form-control' autoComplete='off'
                value={employee.email}
                onChange={handleClick}/>

            </div>
            <button className='btn btn-success'onClick={saveHandler}>save</button>
            <button className='btn btn-danger'onclick={cancelHandler}style={{marginLeft:"10px"}}>cancel</button>

        </form>
        </div>    
        </div>    
    </div>

  )
}
