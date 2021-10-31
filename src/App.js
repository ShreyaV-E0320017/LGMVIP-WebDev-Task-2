import React from 'react';
import './App.css';
import './style.css';
import Griduser from './Appnum';
import { Navbar, Container } from'react-bootstrap';

function App() {

  const [loaduser, setLoadUser] = React.useState(false);  
  
  const [displayuser, setDisplayUser] = React.useState([]);

  const [resfetcher, setResFetcher] = React.useState(false);  
  
  const handleClick = () => {

    setResFetcher(true);
    
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        
        setDisplayUser(res.data);
        setInterval(() => {
          setLoadUser(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar Start */}
      <section className='part'>
      <div class="tool">
      <React.Fragment>
      <div class="m">
      <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home" style = {{ "font-size": "45px", "text-align":"left" }}>
          PROWORK
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">  
         
          </Navbar.Collapse>
          
          </Navbar.Brand>
                    
          <button onClick = {handleClick} variant="warning" size="lg" style = {{ color: "black", "font-size":"40px", "background-color":"cyan" }}>
          GET USERS
          </button>
          
          </Container>
          </Navbar>
        </div>
        </React.Fragment>
      
        {/* Navbar End */}

        <div className='container'>
          <div className='row justify-content-center '>
            {resfetcher ? (
              loaduser ? (                        
                                           
                <Griduser userData={displayuser} />                                                                       

              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className='col-6  col-sm-8 instruction'>
                
              </div>
            )}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default App;
