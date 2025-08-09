import Adminlayout from '../layout/Adminlayout';
import {Link} from 'react-router-dom';
function Users(){
    return(
        <Adminlayout>
        <h1>Users</h1>
        <table className="mt-5 table table-bordered">
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
        </table>
        </Adminlayout>
    );
}
export default Users;