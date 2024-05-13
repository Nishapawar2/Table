import './App.css';
import DataTable from './DataTable';

const tableData=
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
     <DataTable data={tableData}/>
    </div>
  );
}

export default App;
