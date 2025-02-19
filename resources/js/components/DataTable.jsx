// DataTable.jsx
import React from 'react';

const DataTable = ({ properties }) => {
  return (
    <div>
      <button className="btn btn-blue">Bulk Upload</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Batch</th>
            <th>City</th>
            <th>Society</th>
            <th>Block</th>
            <th>Marla</th>
            <th>Size</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.batch}</td>
              <td>{property.city}</td>
              <td>{property.society}</td>
              <td>{property.block}</td>
              <td>{property.marla}</td>
              <td>{property.size}</td>
              <td>{property.price}</td>
              <td>{property.status}</td>
              <td><button>👁️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;