import React from 'react'

export const Categories = () => {
  const data = [
    {
      catImg:'./Images/Category/Cat1.png',
      catName: 'Fashion'
    },
    {
      catImg: './Images/Category/Cat2.png',
      catName: "Electronic",
    },
    {
      catImg: './Images/Category/Cat3.png',
      catName: "Cars",
    },
    {
      catImg: './Images/Category/Cat4.png',
      catName: "Home & Garden",
    },
    {
      catImg: './Images/Category/Cat5.png',
      catName: "Gifts",
    },
    {
      catImg: './Images/Category/Cat6.png',
      catName: "Music",
    },
    {
      catImg: './Images/Category/Cat7.png',
      catName: "Health & Beauty",
    },
    {
      catImg: './Images/Category/Cat8.png',
      catName: "Pets",
    },
    {
      catImg: './Images/Category/Cat9.png',
      catName: "Baby Toys",
    },
    {
      catImg: './Images/Category/Cat10.png',
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
