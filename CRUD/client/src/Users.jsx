import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function Users () {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:3000')
//         .then(result => setUsers(result.data))
//         .catch(err => console.log(err))
//     }, [])
//     return(
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to ="/create" className="btn btn-success">Add +</Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Age</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                           {
//                              users.map((user) => (
//                                 <tr key={user.Email}>
//                                   <td>{user.name}</td>
//                                   <td>{user.email}</td>
//                                   <td>{user.age}</td>
//                                   <td>
//                                     <Link to ="/update" className="btn btn-success">Update</Link>
//                                     <button className="btn btn-danger">Delete</button>
//                                   </td>
//                                 </tr>
//                               ))
//                           }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
           
//     )
// }
// export default Users;
// ... (other imports)

function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    {/* Link to the dynamic "/update/:email" route */}
                    <Link to={`/update/${user.email}`} className="btn btn-success">
                      Update
                    </Link>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Users;
  