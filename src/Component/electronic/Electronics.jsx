import React from 'react'
import img7 from '../../Image/Electronic/ep1.jpg'
import img8 from '../../Image/Electronic/ep2.png'
import img9 from '../../Image/Electronic/ep3.png'
import img10 from '../../Image/Electronic/ep4.png'
import img11 from '../../Image/Electronic/ep5.png'
import img12 from '../../Image/Electronic/ep6.png'

function Electronic() {
  return (
    <>
      <div className="hedaer">
        <h1>This is our Electrnoics's Item's </h1>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-4">
            <img src={img7} alt="p1"></img>
            <p>
              <span> Apple Macbook </span>{' '}
            </p>
            <span>Price : 69999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img8} alt="p2"></img>
            <p>
              <span> Apple Iphone</span>{' '}
            </p>
            <span>Price : 79999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img9} alt="p2"></img>
            <p>
              <span> Smart Watch</span>{' '}
            </p>
            <span>Price : 2999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <img src={img10} alt="p2"></img>
            <p>
              <span>Boat Airpods</span>{' '}
            </p>
            <span>Price : 999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img11} alt="p2"></img>
            <p>
              <span> Apple iPad</span>{' '}
            </p>
            <span>Price :49999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img12} alt="p2"></img>
            <p>
              <span>Smart Led Tv</span>{' '}
            </p>
            <span>Price : 29999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Electronic
