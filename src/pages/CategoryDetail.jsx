import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryDetail = () => {
    const params = useParams();
    const cateId = params.cate_id;
  return (
    <div>
        <h3 className='text-2xl'>Category Details with ID : {cateId}</h3>
    </div>
  )
}

export default CategoryDetail
