import React from 'react';
import { Outlet,Link} from "react-router-dom";
const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
   
    
       <Outlet/>
       
  </div> 


  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4  w-72 bg-gray-900 text-white">
    <p className='text-left text-gray-400'><small>Menu</small></p><br />
    <div class="accordion overflow-x-hidden" id="accordionExample5">
  <div class="accordion-item bg-gray-900">
    <h2 class="accordion-header mb-0" id="headingOne5">
      <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-white text-white text-left
        bg-gray-900
       
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5">
            
        <p>Dashboard</p>
      </button>
    </h2>
    <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
      <div class="accordion-body py-4 px-5 text-left">
       <li className='py-3'>Ecommerce</li>
       <li className='py-3'>Saas</li>
       <li className='py-3'>Crypto</li>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-gray-900 text-white">
    <h2 class="accordion-header mb-0" id="headingTwo5">
        <p className='text-left py-3 text-gray-400'><small>Application</small></p>
       <div className='text-left px-5 '>
       <button className=' py-3'> Calender</button> <br />
        <button className=' py-3'> Chat</button> <br />
        <button className=' py-3'> File Manager</button>
       </div>
      <button class="
       accordion-button
       relative
       flex
       items-center
       w-full
       py-4
       px-5
       text-white text-white text-left
       bg-gray-900
      
       rounded-none
       transition
       focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
        E-commerce
      </button>
    </h2>
    <div id="collapseTwo5" class="accordion-collapse collapse" aria-labelledby="headingTwo5">
      <div class="accordion-body py-4 px-5 text-left">
      <li className='py-3'>Ecommerce</li>
       <li className='py-3'>Saas</li>
       <li className='py-3'>Crypto</li>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-gray-900 text-white">
    <h2 class="accordion-header mb-0" id="headingThree5">
      <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-white text-white text-left
        bg-gray-900
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
        aria-controls="collapseThree5">
       Email
      </button>
    </h2>
    <div id="collapseThree5" class="accordion-collapse collapse" aria-labelledby="headingThree5">
    <div class="accordion-body py-4 px-5 text-left">
      <li className='py-3'>Ecommerce</li>
       <li className='py-3'>Saas</li>
       <li className='py-3'>Crypto</li>
      </div>
    </div>
  </div>
</div>
    
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;