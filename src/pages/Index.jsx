import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Index = () => {
  return (
    <main className='relative'>
      <div className="md:mx-4 lg:mx-auto flex justify-between">
        <Sidebar />

        <div className="content">
            <div className="flex flex-col">
                <Navbar />

                <div className="mt-11 overflow-auto">
                  <Hero />

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus perspiciatis consequuntur temporibus dolorem tempore repellat nam architecto. Explicabo mollitia eius officia molestiae, esse laboriosam quidem illo saepe, sapiente iste consectetur 
                </div>
            </div>
             
        </div>
      </div>
    </main>
  )
}

export default Index
