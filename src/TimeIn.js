import React from 'react'

const TimeIn = () => {
  const data = [
    { id: 1, name: 'Alyanna Lingat'},
    { id: 2, name: 'Jhonie Ann Pancho'},
    { id: 3, name: 'Shaula Gentozaga'}
    
  ];
  return (
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
    // <div>
    //   <h1>NUMBER IN TIME IN</h1>
    //   <p>This is Time in</p>
    // </div>
  )
}

export default TimeIn;
