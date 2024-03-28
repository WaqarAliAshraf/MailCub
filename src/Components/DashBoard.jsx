import React from 'react';


const Dashboard = () => {
  return (
    <div className='p-3'>
      <h1>Hi,Welcome back</h1>
      <a href="/">login page</a>
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card gree ">
              <i class="fa-solid fa-users"></i>
              <h1>363</h1>
              <p>Total Users</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card blu">
              <i class="fa-solid fa-globe"></i>
              <h1>94</h1>
              <p> Verified Domains</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
            <div className="card card-red">
              <i class="fa-solid fa-ban"></i>
              <h1>104</h1>
              <p>Unverified Domains </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;