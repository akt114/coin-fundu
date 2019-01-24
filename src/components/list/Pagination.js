import React from 'react'


const Pagination=(props)=>{
    const {page,totalPages,handlePaginationClick}=props

    return (
       
     
     <div>
           <button disabled={page<2} onClick={()=>handlePaginationClick("previous")}>
           &larr;
           </button>
        <span>
            Page<b>{page}</b>of <b>{totalPages}</b>
        </span>
         <button disabled={page>=totalPages} onClick={()=>handlePaginationClick("next")}>
              &rarr;
            </button>
        </div>
   )
}
export default Pagination;