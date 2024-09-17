import React, { useEffect } from 'react'
import {useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

export default function UpdateEmployeeComponent() 
{
    let navigate=useNavigate();
     
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const {id}=useParams();



    useEffect(()=>
    {
        
        EmployeeService.getEmployeeById(id).then(res=>
        {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        }

        ).catch(error=>
        {
            console.log(error);
        }

        )
    },[])

      const cancelHandler=()=>
      {
        navigate("/employees");
      }

        const updateHandler=(e)=>
        {
            const employee={firstName,lastName,email};
            if(id)
            {
                EmployeeService.updateEmployee(id,employee).then(res=>
                {
                    navigate("/employees");
                }

                )
            }
            else
            {
                EmployeeService.createEmployee(employee).then(res=>
                {
                    navigate("/employees");
                }

                )
            }
        }


  return (

    <div> <div className='container mt-4'>
    <div className='card w-50 offset-md-3'>
    <h3 className='text-center mt-3'>Update Employee</h3>
    <div className='card-body'>
        <form>
            <div className='form-group my-3'>
                <label>First Name:</label>
                <input type="text" name="firstName" id="firstName"
                className='form-control'autoComplete='off'
                value={firstName} onchange={(e)=>setFirstName(e.target.value)}/>
            
            </div>
            <div className='form-group my-3'>
                <label>last Name</label>
                <input type="text" name="lastName" id="lastName"
                className='form-control' autoComplete='off'
                value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              
            </div>
            <div className='form-group my-3'>
                <label>Email:</label>
                <input type="text" name="email" id="email"
                className='form-control' autoComplete='off'
                value={email}onchange={(e)=> setEmail(e.target.value)}/>
               

            </div>
            <button className='btn btn-success'onClick={updateHandler}>save</button>
            <button className='btn btn-danger' style={{marginLeft:"10px"}}
              onClick={cancelHandler}>cancel</button>

        </form> 
        </div>    
        </div>    
    </div>

    </div>
  )
}
