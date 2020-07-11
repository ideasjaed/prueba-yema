import React from 'react';



const Pagination = ({totalCount, onSelectPage, selectPage}) => {

    
    const pages = Math.ceil(totalCount/12); 
    return (
        <div className="flex justify-center mt-8 mb-8">
            {[...Array(pages-6).keys()].map((page) => (
           <button onClick={ () => onSelectPage(page+1)} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${parseInt(selectPage) === page + 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                {page+1}
            </button>
        ))}
           
  
</div>
      
    );
  };

  export default Pagination


  