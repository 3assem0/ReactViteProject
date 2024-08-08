import React from 'react'

export default function Product({name,price,category , desc , hasSale , deleteProduct , index , count , changeCount}) {
  return (
    <div className="col-span-1 text-center p-4 rounded-lg bg-white text-slate-950 relative">
      {hasSale && <span className=" bg-emerald-600 absolute top-0 end-0 mr-2 p-3 rounded-b-2xl">Sale</span>}
      {/* {hasSale == true ? <span className=" bg-emerald-600 absolute top-0 end-0 mr-2 p-3 rounded-b-2xl">Sale</span> : null} */}
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{category}</h2>
      <p>{desc}</p>
      <div className="flex justify-center items-center">
        <button onClick={() => {changeCount(index,count + 1)}} className="px-2 border border-green-500 rounded-lg flex ">+</button>
        <h5 className='m-2'>{count}</h5>
        <button onClick={() => {changeCount(index,count - 1)}} className="px-2 border border-green-500 rounded-lg">-</button>
      </div>
      <button onClick={()=>{deleteProduct(index)}} className=" text-red-600 p-3 border-red-500 border mt-4 rounded-lg hover:bg-red-600 hover:text-white">Delete</button>
    </div>
  )
}     
