import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const cates = [
    {id: 1, name: 'protein'},
    {id: 2, name: 'Carbohydrate'},
    {id: 3, name: 'Fat'},
    {id: 4, name: 'vegan'}
]

const Categories = () => {
  return (
    <div className='container mx-auto flex gap-8'>

        <div className="flex flex-col gap-3 mt-6">
        <h2 className='text-3xl'>Categories Page</h2>
            {
                cates && cates.map((cate) => (
                    <Link to={`/categories/${cate.id}`} key={cate.id} className="">
                        {cate.name}
                    </Link>
                ))
            }
        </div>

        <Outlet />
    </div>
  )
}

export default Categories