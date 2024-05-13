import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [tabledata, setTabledata] = useState(data);

  const sortByType = (type) => {
    let newtabledata = [];
    if (type === "date") {
        newtabledata= [...tabledata].sort((a, b) => {
            return new Date(b[type]) - new Date(a[type]); // descending
          });

    
    } else if (type === "views") {
      newtabledata = [...tabledata].sort((a, b) => {
        let val = 0;
        val = b[type] > a[type] ? 1 : -1;
        return val;
      });
      
    }
    setTabledata(newtabledata);
 
  };
  return (
    <div>
      <button value="date" onClick={(e) => sortByType(e.target.value)}>
        Sort by Date
      </button>
      <button value="views" onClick={(e) => sortByType(e.target.value)}>
        Sort by Views
      </button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.date}</td>
                <td>{d.views}</td>
                <td>{d.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
