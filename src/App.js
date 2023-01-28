import React ,{useEffect,useState} from 'react'
import axios from 'axios'
function App() {


  const [data,setData]=useState("");
  const [date,setDate]=useState("");

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setData(res.data[date]))
    .catch(err=>(err))
  },[data,date])

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-5'>
            <h2 className='text-center text-white display-6'>Covid-19 Turkey Days Table</h2>
            <input type="text" className='form-control mt-5' placeholder='DD/MM/YYYY' onChange={(e)=>setDate(e.target.value)} />
            <table className="table text-white mt-4">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tests</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Death</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                    <th scope="row">1</th>
                    <td>{data === undefined ? "Please İnput Date" : data.totalTests}</td>
                    <td>{data === undefined ? "Please İnput Date" : data.totalPatients}</td>
                    <td>{data === undefined ? "Please İnput Date" : data.deaths}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
