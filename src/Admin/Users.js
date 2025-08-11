import Adminlayout from '../layout/Adminlayout';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
function Users(){
    const [users,setUsers] =React.useState([])
    axios.get(`http://localhost/christmas-api/users.php`).then(function(response){
        setUsers(response.data);
    });
    return(
        <Adminlayout>
           <div className='container'>
           
        <h1>Users</h1>
        <Link to={'/admin/add-users'} className="btn btn-primary">Add new</Link>
        <table className="mt-5 table table-bordered">
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {users && users.map((d, key) =>
            <tr key={key}>
                <td className="text-bold-500">{key +1}</td>
                <td>{d.name}</td>
                <td>{d.contact_no}</td>
                <td>{d.email}</td>
               <td>
                </td>
                </tr>
                )}
        </table> 
        </div>
        </Adminlayout>
    );
}
export default Users;