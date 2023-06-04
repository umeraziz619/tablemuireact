import axios from "axios";
import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res) =>
      setData(res.data)
      
    );
  };
  const emailFormatter=(data,row)=>{
    return <>
    Email = {data}
    </>
  }
  const column = [
    {
      dataField: "email",
      text: "Email",
      sort:true,

    },
    {
      dataField:"postId",
      text:"Product ID",
      sort:true,
    },
    {
      dataField:"name",
      text:"Name",
      sort:true,
    },
  ];
  return (
    <div className="myTable">
      <BootstrapTable keyField="id" data={data} columns={column}  striped  hover condensed pagination={paginationFactory()}>

      </BootstrapTable>
    </div>
  );
}

export default App;
