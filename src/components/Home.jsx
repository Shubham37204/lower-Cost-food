import React from 'react'
import "../css/Home.css"

import b1 from "../image/b1.jpg"
import b2 from "../image/b2.jpeg"
import b3 from "../image/b3.jpg"

import p1 from "../image/p1.jpg"
import b4 from "../image/b4.jpg"
import b5 from "../image/b5.jpeg"
import b6 from "../image/b6.jpeg"
import p2 from "../image/p2.jpeg"

import p7 from "../image/p7.jpg"

const Home = () => {
  return (
    <div className='body'>

      <div className="back">
        <div className="container">
          <div className="row">
            <div className="circle">
              <div className="number"><b>40%</b></div>
              <h1><b>BUSINESS LUNCH</b></h1>
            </div>
            <div className="details">
              <h2><b>NEW RESTAURANT</b></h2>
            </div>
            <div> <h3><b>Where every</b></h3></div>
            <div> <h3><b>ingredient</b></h3></div>
            <div> <h3><b> tells a story</b></h3></div>
            <div className="button">
              <button type="button" class="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
          <div class="col ani">
            <img src={b1} class="card-img-top" alt='picture' />
            <div class="card-body sharir">
              <h5 class="card-title name">MENU DEVELOPMENT</h5>
            </div>
          </div>
          <div class="col ani">
            <img src={b2} class="card-img-top" alt='picture' />
            <div class="card-body sharir">
              <h5 class="card-title name">MENU DEVELOPMENT</h5>
            </div>
          </div>
          <div class="col ani">
            <img src={b3} class="card-img-top" alt='picture' />
            <div class="card-body sharir">
              <h5 class="card-title name">RESTAURANT</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5 text-center">
        <div class="row">
          <div class="col-6 niche">
            <span>$27</span>
            <h1 className='h1'>CHICKEN WITH GINGER</h1>
            <p className='p'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
          </div>
          <div class="col-6 ani">
            <img src={p1} className="card-img-top pic" alt='picture' />
          </div>
        </div>
      </div>

      <div className="container up">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col ani">
            <img src={b4} class="card-img-top" alt='picture' />
          </div>
          <div class="col ani ">
            <img src={b5} class="card-img-top" alt='picture' />
          </div>
          <div class="col ani">
            <img src={b6} class="card-img-top" alt='picture' />
          </div>
        </div>
      </div>

      <div class="container mt-5 text-center">
        <div class="row">
          <div class="col-6 ani">
            <img src={p2} className="card-img-top pic" alt='picture' />
          </div>
          <div class="col-6 niche">
            <span>$4</span>
            <h1 className='h1'>CROISSANT WITH TOPPING</h1>
            <p className='p'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too.</p>
          </div>
        </div>
      </div>

      <div class="container mt-5 text-center">
        <div class="row">
          <div class="col-6 niche">
            <span>$14</span>
            <h1 className='h1'>SALAD WITH CHICKEN</h1>
            <p className='p'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
          </div>
          <div class="col-6 ani">
            <img src={p7} className="card-img-top pic" />
          </div>
        </div>
      </div>

      <div className="backside">
        <div className="container">
          <div className="row">
            <div className="circle">
              <div className="number"><b>40%</b></div>
              <h1><b>BUSINESS LUNCH</b></h1>
            </div>
            <div className="details">
              <h2><b className='b'>Keep up to date with us</b></h2>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="button1">
                <button type="button" class="btn btn-warning">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
