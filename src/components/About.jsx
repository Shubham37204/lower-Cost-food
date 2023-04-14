import React from 'react'
import "../css/About.css"
import p1 from "../image/p1.jpg"
import p3 from "../image/p3.jpg"
import b1 from "../image/b1.jpg"
import b2 from "../image/b2.jpeg"
import b3 from "../image/b3.jpg"

const About = () => {
  return (
    <div>

      <div className="white">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h2 className='h21'>About-Us</h2>
              <p className='p22'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
              <div className="button">
                <button type="button" class="btn btn-warning">Warning</button>
              </div>
            </div>
            <div class="col">
              <img src={p1} class="card-img-top" />
            </div>
          </div>
        </div>
      </div>

      <div className="yellow">
        <div className="container">
          <div className="row">
            <div className="whites">
              <div className="col">
                <h1 className='h12'>We make a small, intimate,</h1>
              </div>
              <div className="col">
                <h1 className='h12'>and inviting space for an</h1>
              </div>
              <div className="col">
                <h1 className='h12'>unforgettable meal</h1>
              </div>
              <div className="col">
                <p className='p23'>Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p></div>
              <button type="button" id='btn' class="btn btn-success">Success</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={p3} class="card-img-top" id='top' />
          </div>
          <div class="col">
            <h2 id='h21'>About-Us</h2>
            <p id='p22'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
            <div className="button">
              <button type="button" id='bttn' class="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id='cont'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <img src={b1} class="card-img-top" />
            <div class="card-body sharir">
              <h5 class="card-title name">MENU DEVELOPMENT</h5>
            </div>
          </div>
          <div class="col">
            <img src={b2} class="card-img-top" />
            <div class="card-body sharir">
              <h5 class="card-title name">MENU DEVELOPMENT</h5>
            </div>
          </div>
          <div class="col">
            <img src={b3} class="card-img-top" />
            <div class="card-body sharir">
              <h5 class="card-title name">RESTAURANT</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="green">
        <div className="container">
          <div className="row">
            <div className="Whites">
              <div className="col">
                <h1 className='h12'>Keep up to date with us</h1>
              </div>
              <div class="col-sm-9" id='colm'>
                <div class="row">
                  <div class="col-8 col-sm-6">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                  </div>
                  <div class="col-4 col-sm-6">
                    <button type="button" id='bttns' class="btn btn-warning">Warning</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
