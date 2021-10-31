import React from 'react';
import './App.css';
import './style.css';

export default function Griduser(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className='col-lg-4 col-md-6 mt-4 col-sm-8 col-xs-10 mx-auto' >

            <div className='class1'>
              <img src={user.avatar} alt='' className='avatar' />

              <div className='details'>

                <p>ID_NUMBER : {user.id}</p>

                <h3>
                  {user.first_name} {user.last_name}
                </h3>

                <p>EMAIL - ID: {user.email}</p>

              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
