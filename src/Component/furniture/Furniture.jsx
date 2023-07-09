import React from 'react'
import img13 from '../../Image/Furniture/fp1.png'
import img14 from '../../Image/Furniture/fp2.png'
import img15 from '../../Image/Furniture/fp3.png'
import img16 from '../../Image/Furniture/fp4.png'
import img17 from '../../Image/Furniture/fp5.png'
import img18 from '../../Image/Furniture/fp6.png'

function Furniture() {
  return (
    <>
      <div className="hedaer">
        <h1>This is our Furniture Item's list</h1>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-4">
            <img src={img13} alt="p1"></img>
            <p>
              <span>Stylis Bed</span>{' '}
            </p>
            <span>Price : 19999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img14} alt="p2"></img>
            <p>
              <span>Stylis Sofa Set</span>{' '}
            </p>
            <span>Price :14999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img15} alt="p2"></img>
            <p>
              <span>Stylis cuboard</span>{' '}
            </p>
            <span>Price : 9999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <img src={img16} alt="p2"></img>
            <p>
              <span>Stylis Chair</span>{' '}
            </p>
            <span>Price : 1999.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img17} alt="p2"></img>
            <p>
              <span>Stylish Dinning Table</span>{' '}
            </p>
            <span>Price : 15000.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
          <div class="col-sm-4">
            <img src={img18} alt="p2"></img>
            <p>
              <span>Stylish Table</span>{' '}
            </p>
            <span>Price : 2000.00 Only</span>
            <br />
            <button>AddToCart</button>
            <button>ByNow</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Furniture
