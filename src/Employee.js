import React from 'react'
import './styles/employee.css';


const Employee = () => {

  const data = [
         { id: 2, name: 'Alyanna Ella Lingat'},
         { id: 10, name: 'Jhonie Ann Pancho'},
         { id: 20, name: 'Shaula Khei Gentozala'},
         { id: 7, name: 'Denmarc Pascual'},
         { id: 12, name: 'Katherine Vyne Perez'},
         { id: 9, name: 'Jan Princess Alconcer'},
         { id: 1, name: 'Aejay Pido'},
         { id: 5, name: 'Carlos Lim'},
         { id: 16, name: 'Raphael Antonio'},
         { id: 15, name: 'Meljohn Chavez'},
         { id: 13, name: 'Lance Quising'},
         { id: 17, name: 'Rodelio Sedanza'},
         { id: 11, name: 'Kalix Jace Martinez'},
         { id: 14, name: 'Luna Valeria'},
         { id: 19, name: 'Sevi Camero'},
         { id: 8, name: 'Elyse Ledezma'},
         { id: 6, name: 'Cylden Ramirez'},
         { id: 18, name: 'Samantha Vera '},
         { id: 4, name: 'Avianna Diaz'},
         { id: 3, name: 'Ashianna Kim Fernansez'},
       ];

       data.sort((a, b) => (a.name > b.name ? 1 : -1));
       console.log(data); 
       
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

export default Employee;
