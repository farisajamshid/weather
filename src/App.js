
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
function App() {
  const[city, setCity]=useState("")
  const[datas, setData]=useState({})
  const[temp, setTemp]=useState()
  const[feels, setFeels]=useState()
  const[humidity, setHumidity]=useState()
  const[pressure, setPressure]=useState()
  const[wind, setWind]=useState()
  
  // const click=()=>{
  //   Swal.fire({
  //     title: "The Internet?",
  //     text: "That thing is still around?",
  //     icon: "question"
  //   });
 // }
  const display=async()=>{

    const api=`https://api.openweathermap.org/data/2.5/weather?&appid=99c7df0b73f510c03a8542d81d8e50ca&q=${city},India&units=metric`
    //     const url="https://api.openweathermap.org/data/2.5/weather"
    try{
      const data=await axios.get(api)
      setData(data.data)
      setTemp(data.data.main.temp)
      setFeels(data.data.main.feels_like)
      setPressure(data.data.main.pressure)
      setWind(data.data.wind.speed)
      setHumidity(data.data.main.humidity)
   //console.log(datas)
   console.log(data)

  

    }catch(error)
    {
 console.log(error)
    }
 
  }

 

  return (
<Container className='mainContainer mt-5 mb-5 text-warning '>
  
      <Form >
        <Row>
          <Col lg={12}>
            <h1 className='text-color mt-2 mb-4'> </h1>
          </Col>
        </Row>
        </Form>
        <Form>
        <Row>
          
          <Col lg={12}>
            <div className='d-flex bg-light'>
           
            <Form.Control
              type="text" 
              placeholder="Enter City"
              className='fstyle text-warning  fs-3 '
              onChange={(e)=>{
                setCity(e.target.value)
              }}
            />
             <CiSearch className='mt-2 fs-1 fstyle' onClick={display}/></div> 
            
          </Col>
        
        </Row>
        </Form>
    
 
        <Row className='bg-lightmt-5'>
          <Col lg={6}>

        <h2 className='fs-3 p-3'>
        {datas.name}
        </h2>
        <p className='p-1 ml-5 fs-4'></p>
        <Row>
<Col lg={6}>  

        <img src="https://th.bing.com/th?id=OIP.6LNekWuo9dzk_rVArZU31QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className='img-responsive img-style image-rounded' alt=" comic sun image"/>
       {/* <p className=' img-style '></p> */}
       </Col>
       <Col lg={6}>
    <p className='fs-2'>   Temp:{temp}<sup>0</sup>C</p>
       </Col>
       </Row>
       
        </Col>
        <Col lg={6}>
          <div className='fs-1'>
  <p> Feels like :{feels}  </p>
  <p> Humidity:{humidity}</p>
  <p>Wind:{wind}</p>
  <p>Pressure:{pressure}</p>

  </div>
        </Col>
        </Row>

        </Container>
  );
}

export default App;
