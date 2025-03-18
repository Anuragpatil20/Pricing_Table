import React from 'react'

function Pricing_Table() {
  return (
    <div>
    
    <section class="py-12 bg-[url('https://wallpaperaccess.com/full/183948.jpg')] bg-no-repeat bg-cover bg-center items-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 ">
      <h2 class="uppercase  text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500  sm:text-5xl">
        Pricing Tables
      </h2>
      <div className='h-2 w-100 bg-gradient-to-r from-green-400 to-blue-500  mx-auto '></div>
     
    </div>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
      
      

      
      <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:bg-gradient-to-r from-black to-gray-700 transition duration-300">
        <div class="mb-8">
       
          <span class="text-2xl font-mono font-bold text-yellow-500  ">Basic</span>
          
          <p class="mt-4 text-gray-400">Perfect for small businesses and startups.</p>
        </div>
        <div class="mb-8">
          <span class="text-5xl font-extrabold text-white">$49</span>
          <span class="text-xl font-medium text-gray-400">/mo</span>
        </div>
        <ul class="mb-8 space-y-4 text-gray-400">
          <li class="flex items-center">
           <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>5 user accounts</span>
          </li>
           <li class="flex items-center">
           <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>100 transactions per month</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Standard support</span>
          </li>
        </ul>
        <a href="#" class="block w-full py-3 px-6 mt-24 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </a>
      </div>

      
      <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:bg-gradient-to-r from-black to-gray-700 transition duration-300">
        <div class="mb-8">
          <h3 class="text-2xl font-mono font-bold text-yellow-500">Standard</h3>
          <p class="mt-4 text-gray-400">Ideal for growing businesses and enterprises.</p>
        </div>
        <div class="mb-8">
          <span class="text-5xl font-extrabold text-white">$99</span>
          <span class="text-xl font-medium text-gray-400">/mo</span>
        </div>
        <ul class="mb-8 space-y-4 text-gray-400">
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Unlimited user accounts</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Unlimited transactions</span>
          </li>
          <li class="flex items-center">
            <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Priority support</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Advanced analytics</span>
          </li>
        </ul>
        <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </a>
      </div>

      
      <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:bg-gradient-to-r from-black to-gray-700 transition duration-300">
        <div class="mb-8">
          <h3 class="text-2xl font-mono font-bold text-yellow-500">Premium</h3>
          <p class="mt-4 text-gray-400">Tailored for large-scale deployments and custom needs.</p>
        </div>
        <div class="mb-8">
          <span class="text-5xl font-extrabold text-white">Custom</span>
        </div>
        <ul class="mb-8 space-y-4 text-gray-400">
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Dedicated infrastructure</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Custom integrations</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Dedicated support team</span>
          </li>
          <li class="flex items-center">
          <img className='h-6 w-6 mr-2' src='https://cdn-icons-png.flaticon.com/128/7420/7420725.png'/>
            <span>Premium SLAs</span>
          </li>
        </ul>
        <a href="#" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Pricing_Table