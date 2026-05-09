import React from 'react'
import cate1 from "./assets/cate1.jpg"
import cate2 from "./assets/cate2.jpg"
import cate3 from "./assets/cate3.jpg"
import boxIphone17One from "./assets/iphone17boxing1.mp4"

function Categories() {
  return (
    <>
        <div className="categories">
            <h2>Features Categories</h2>
            <div className="group-categories">
            <div className="all-categories">
                <img src={cate1} alt="" />
                <h3>Iphone 17 proMax</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!</p>
                <button>View</button>
            </div>
            <div className="all-categories">
                <img src={cate2} alt="" />
                <h3>Iphone 17 proMax</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!</p>
                <button>View</button>
            </div>
            <div className="all-categories">
                <img src={cate3} alt="" />
                <h3>Iphone 17 proMax</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores!</p>
                <button>View</button>
            </div>
            </div>
        </div>

          <div className="catevideo">
                <div className="allvideocate">
                    <div className="catevideos">
                  <video 
                        src={boxIphone17One} 
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

export default Categories