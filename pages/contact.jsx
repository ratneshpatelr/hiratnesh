
import Contact from '@/components/Contact'
import React from 'react'

const contact = () => {
  return (
    
    <div className="mt-28 mx-auto">
    <Contact/>
    <div className="mt-10 text-center">
           <h2 className="font-space font-bold">I always open to chat so you can cantact me by</h2>
           <div className="flex flex-col gap-2 mt-8">
            <li  className="pr-10 font-bold list-none text-red-400"> <a href="mailto:ratneshpatel8815@gmail.com">ratneshpatel8815@gmail.com</a></li>
            <li className="pr-10 font-bold list-none text-lime-500"><a href="https://instagram.com/ratnesh_patel.8815">Instagram</a></li>
            <li className="pr-10 font-bold list-none text-green-800"><a href="https://www.linkedin.com/in/ratnesh-kurmi-064682240/">Linkedin</a></li>
            <li className="pr-10 font-bold list-none text-sky-500"><a href="https://github.com/ratneshpatelr/">Github</a></li>
           </div>
     </div>
    </div>
  )
}

export default contact
