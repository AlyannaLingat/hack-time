import React from 'react'
import './styles/employee.css';


const Employee = () => {

  const data = [
         { id: 1, name: 'Alyanna Ella Lingat'},
         { id: 2, name: 'Jhonie Ann Pancho'},
         { id: 3, name: 'Shaula Khei Gentozala'},
         { id: 4, name: 'Denmarc Pascual'},
         { id: 5, name: 'Katherine Vyne Perez'},
         { id: 6, name: 'Jan Princess Alconcer'},
         { id: 7, name: 'Aejay Pido'},
         { id: 8, name: 'Carlos Lim'},
         { id: 9, name: 'Raphael Antonio'},
         { id: 10, name: ' '},
         { id: 11, name: ' '},
         { id: 12, name: ' '},
         { id: 13, name: ' '},
         { id: 14, name: ' '},
         { id: 15, name: ' '},
         { id: 16, name: ' '},
         { id: 17, name: ' '},
         { id: 18, name: ' '},
         { id: 19, name: ' '},
         { id: 20, name: ' '},
       ];

  return (
    <>
    <h1>Empleyee's List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>

      {data.map(item => (
           <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>

          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};
// const Employee = () => {
//   const data = [
//     { id: 1, name: 'Alyanna Ella Lingat'},
//     { id: 2, name: 'Jhonie Ann Pancho'},
//     { id: 3, name: 'Shaula Khei Gentozala'},
//     { id: 4, name: 'Denmarc Pascual'},
//     { id: 5, name: 'Katherine Vyne Perez'},
//     { id: 6, name: 'Jan Princess Alconcer'},
//     { id: 7, name: 'Aejay Pido'}
    
//   ];
//   return (
//     <table>
//       <thead>
       
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map(item => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }


// const Employee = () => {
//   return (
//     <div>
//       <h1>NUMBER OF EMPLOYEE</h1>
//       </div>
//   )
// }

export default Employee;
