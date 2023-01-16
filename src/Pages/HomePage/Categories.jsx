import React from 'react'
import './Categories.css'  
// import './Header/Header.css'
export const Categories = () => {
  const data = [
    {
      catImg: './Assets/Category/Cat1.png',
      catName: 'Fashion'
    },
    {
      catImg: './Assets/Category/Cat2.png',
      catName: "Electronic",
    },
    // {
    //   catImg: './Assets/Category/Cat3.png',
    //   catName: "Cars",
    // },
    // {
    //   catImg: './Assets/Category/Cat4.png',
    //   catName: "Home & Garden",
    // },
    {
      catImg: './Assets/Category/Cat5.png',
      catName: "Gifts",
    },
    {
      catImg: './Assets/Category/Cat6.png',
      catName: "Music",
    },
    {
      catImg: './Assets/Category/Cat7.png',
      catName: "Health & Beauty",
    },
    // {
    //   catImg: './Assets/Category/Cat8.png',
    //   catName: "Pets",
    // },
    {
      catImg: './Assets/Category/Cat9.png',
      catName: "Baby Toys",
    },
    {
      catImg: './Assets/Category/Cat10.png',
      catName: "Groceries",
    },
  ]
  
  return (
    <>
    
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.catImg} alt='' />
              <span>{value.catName}</span>
            </div>
          )
        }
        )}

      </div>
    </>
  )
}
