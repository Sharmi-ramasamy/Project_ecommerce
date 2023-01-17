import React from 'react'
// import './Head.css'
// import './Pages/HomePage/Home.css'
 const Head= () => {
  return (
    <>
      <section className='head'> 
          <div className='containers d_flex'> 
                <div className='left row'> 
                   <i className='fa-solid fa-phone'></i>
                   <label> +1234 567 890 </label>
                   <i className="fa-solid fa-envelope"></i>
                   <label> example@gmail.com </label>
                </div>
                <div className='right row RText'> 
                <label> Theme FAQ's </label>
                <label> Need Help? </label>    
                <span> 🏳️‍⚧️ </span>
                <label> EN </label> 
                <span> 🏳️‍⚧️ </span>
                <label> USD </label>
                </div> 
            </div>
      </section>
    </>
  )
}

export default Head




