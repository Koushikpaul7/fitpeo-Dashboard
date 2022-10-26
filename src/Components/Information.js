import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const Information = () => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
    return (
       <section className='mx-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div className='col-span-3 '>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
        <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">1,257</p>
            <p>Users</p>
          </div>
        </div>
        <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">557</p>
            <p>Projects</p>
          </div>
        </div>
        <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">$11,257</p>
            <p>Total Tasks</p>
          </div>
        </div>
      </div>
      <div className='lg:flex bg-white p-5'>
       <div className=''>
       <p className='text-xl  mb-5'>Overview</p>
        <p className='text-sm'>This month</p>
        <p className='text-2xl font-semibold'>22,789</p>
        <div className='w-64'>
        <div class="flex flex-col">
  <div class="overflow-x-hidden pt-8 ">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Orders <br />
                <span>5,789</span>
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                sales <br />
                <span>16,273</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Order value <br />
                <span>12%</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Customers <br />
                <span>12,375</span>
              </td>
            </tr>
            
            <tr class="border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                income <br />
                <span>$35,458</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Expenses <br />
                <span>12,375</span>
              </td>

            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
       </div>

      <AreaChart width={300} className='lg:w-[600px]' height={370} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </div>

      {/* rest all graphs */}
      <div className='grid lg:grid-cols-3 gap-5 mt-10  p-5'>
            <div className='card bg-white p-1'>
            <BarChart className='' width={280} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
            </div>
            <div className='card bg-white p-1'>
            <PieChart width={250} height={250}>
  <Pie data={data} dataKey="amt" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
            </div>
            <div className='card bg-white p-3'>
              <div className='flex justify-between'>
              <h3 className='text-xl'>Top products</h3>
              <div>
              <select className="select select-ghost w-full max-w-xs">
  <option disabled selected>Monthly</option>
  <option>Native</option>
  <option>Vue</option>
  <option>React</option>
</select>
              </div>
            </div>
            </div>
      </div>

        </div>

        {/* second portion of screen */}
        <div className='col-span-1 p-3 mt-4 lg:flex-row flex-col'>
        <div className="card w-full bg-base-100 shadow-xl">
  <figure>
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="avatar">
  <div className="w-24 rounded-full mx-auto m-[-50px] h-24">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
      <div className='text-center mt-20'>
        <p className='text-xl'>Jeniffer Bennett</p>
        <p>Product Designer</p>
      </div>
      <div className='grid grid-cols-2 gap-5'>
          <div className='card text-center shadow-2xl p-3'>
            <p>Products</p>
            <p>1,234</p>
          </div>
          <div className='card text-center shadow-2xl p-3'>
            <p>Followers</p>
            <p>5.2k</p>
          </div>
      </div>
      <div className="divider"></div>
      <div className='flex justify-between align-center'>
        <p>Earning</p>
        <AiOutlineInfoCircle className='mt-2'/>
      </div>
      <div className="radial-progress text-blue-400 mx-auto mt-3" style={{"--value":70}}>70%</div>
     <div className='text-center'>
       <p>26,256</p>
      <p className='text-gray-400 mb-3'><small>Earnings this month</small></p>
      <small className='text-gray-400'><span className='text-green-600 bg-green-300 rounded-lg p-1 mr-2'>2.24%</span>From previous period</small>
     </div>
  </div>
</div>
        </div>
        </div>
        
       </section>
    );
};

export default Information;