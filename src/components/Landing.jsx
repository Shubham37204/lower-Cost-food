import React from 'react'
import "../css/Landing.css"
import p8 from '../image/p8.jpeg'
import b1 from "../image/b1.jpg"

const Landing = () => {
  return (
    <div>

      <div class="container text-center">
        <div class="row">
          <div class="col square">
            <div className="circle1">
              <div className="number1"><b>40%</b></div>
              <h1 className='h11'><b>BUSINESS LUNCH</b></h1>
            </div>
            <div> <h3 className='h31'><b>Where every</b></h3></div>
            <div> <h3 className='h31'><b>ingredient</b></h3></div>
            <div> <h3 className='h31'><b> tells a story</b></h3></div>
            <div className="button">
              <button type="button" id='bts' class="btn btn-dark">Warning</button>
            </div>
          </div>
          <div class="col">
            <img src={p8} alt="" className='plate' />
          </div>
        </div>
      </div>

      <div className="black">
        <div className="container">
          <div className="row">
            <h1 className='h24'>Keep up to date with us</h1>
            <div className="spa">
              <span className='span'><i class="fa-solid fa-phone" style={{ color: "#4fe232;" }}></i> +1 (234) 567-8910</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col ">
            <img src={b1} alt="" className='plate' />
          </div>
          <div class="col square">
            <div className="number12"><b>A culinary</b></div>
            <div> <h3 className='h32'><b>adventure for all</b></h3></div>
            <div> <h3 className='h32'><b>ingredient</b></h3></div>
            <div> <h3 className='h32'><b>the senses</b></h3></div>
            <div className="button">
              <button type="button" id='bsnl' class="btn btn-dark">Warning</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col black1">
            <div> <h3 className='h34'><b>OUR RESTAURANT</b></h3></div>
            <div> <h3 className='h35'><b>The magic of the</b></h3></div>
            <div> <h3 className='h31'><b>kitchen</b></h3></div>
            <div className="button">
              <button type="button" id='bsnl1' class="btn btn-success">Warning</button>
            </div>
          </div>
          <div class="col">
            <img src={p8} alt="" className='plate' />
          </div>
        </div>
      </div>

      <div className="black">
        <div className="container">
          <div className="row">
            <h1 className='h24'>Keep up to date with us</h1>
            <div className="spa">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                </div>
                <div className="button">
                  <button type="button" id='bsnl2' class="btn btn-warning">Warning</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col ">
            <img src={b1} alt="" className='plate' />
          </div>
          <div class="col square">
            <div className="number12"><b>A culinary</b></div>
            <div> <h3 className='h32'><b>adventure for all</b></h3></div>
            <div> <h3 className='h32'><b>ingredient</b></h3></div>
            <div> <h3 className='h32'><b>the senses</b></h3></div>
            <div className="button">
              <button type="button" id='bsnl' class="btn btn-dark">Warning</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
