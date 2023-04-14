import React from 'react'
import "../css/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="backed">

        <div className="container">
          <div className="row">
            <div className="daaba">
              <h1>Contact Us</h1>
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="form-floating wow">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="rang">
          <div className="container">
            <div className="row">
              <div className="upper">
                <div className="daaba1">
                  <h2 className='h2'>Keep up to date with us</h2>
                  <div class="d-flex justify-content-evenly">
                    <div class="form-floating wow1 mb-3">
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
        </div>
        
        </div>
    </>
  )
}

export default Contact
