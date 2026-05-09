import React from 'react'
import "../index.css"
import Navbar from '../Navbar'
import iphone17 from "../assets/iphone 17.jpg"
import iphone16 from "../assets/iphone 16.jpg"
import s26 from "../assets/s26.jpg"
import iphone15 from "../assets/iphone 15.jpg"
import iphone14 from "../assets/iphone 14pro.jpg"
import iphone13 from "../assets/iphone 13.jpg"
import boxIphone17 from "../assets/iphone17boxing.mp4"
import boxIphone17One from "../assets/iphone17boxing1.mp4"


function Products() {
    let allProducts = [
        {
            image : iphone17,
            title : "Iphone 17",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Aragy"
        
        },
        {
            image : iphone16,
            title : "Iphone 16",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Arag"
        },
        {
            image : s26,
            title : "S26 Ultra",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Arag"
        },
         {
            image : iphone15,
            title : "Iphone 15",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Arag"
        },
         {
            image : iphone14,
            title : "Iphone 14",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Arag"
        },
         {
            image : iphone13,
            title : "Iphone 13",
            parag : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!",
            button : "Arag"
        }
    ]
  return (
    <>
    <Navbar/>
        <div className="categories">
             <h2>Features Categories</h2>
             <div className="group-categories">
                {allProducts.map((product , index)=>(
                     <div className="all-categories" key={index}>
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>{product.parag}</p>
                    <button>{product.button}</button>
                </div>
              ))}
               
        </div>
        </div>

        
        <div className="video">
            <div className="allvideo">
                <div className="videos">
              <video 
                    src={boxIphone17One} 
                    controls 
                    muted
                    autoPlay
                />
                </div>
                 <div className="videos">
              <video 
                    src={boxIphone17} 
                    controls 
                    muted
                    autoPlay
                />
                </div>
                
            </div>
        </div>
         
 

    </>
  )
}

export default Products