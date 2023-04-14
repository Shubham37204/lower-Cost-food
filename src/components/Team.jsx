import React from 'react'
import "../css/Team.css"
import p12 from "../image/p12.jpg"
import p13 from "../image/p13.jpg"
import p14 from "../image/p14.jpg"
import p15 from "../image/p15.jpg"
import p16 from "../image/p16.jpg"

const Team = () => {
    return (
        <div>
            <div className="yellows">
                <div className="container">
                    <div className="row">
                        <div className="whitey">
                            <div className="col">
                                <div><h1 className='h5'>OUR MISSION</h1></div>
                                <div><h3 className='h36'>Chef's team</h3></div>
                                <div><p className='p38'>Article evident arrived express highest men did boy. Mistress <br /> sensible entirely am so. Quick can manor smart money hopes<br /> worth too. Comfort produce husband boy her had hearing.<br /> Law others theirs passed but wishes. You day real less till <br />dear read. Considered use dispatched melancholy<br /> sympathize discretion led. Oh feel if up to till like.</p></div>
                                <div className="button">
                                    <button type="button" id='sk' class="btn btn-warning">Warning</button>
                                </div>
                            </div>
                            <div className="col">
                                <img src={p12} alt="" className='plate1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="down">
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-evenly">
                        <div class="col sideways">
                            <div class="card ">
                                <img src={p13} class="card-img-top middle" alt={p13} />
                                <div class="card-body">
                                    <h5 class="card-title mid">Jeffrey Brown</h5>
                                    <p class="card-text paragraph">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card sideways">
                                <img src={p14} class="card-img-top middle" alt={p14} />
                                <div class="card-body">
                                    <h5 class="card-title mid">Alex Richmond</h5>
                                    <p class="card-text paragraph">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-evenly">
                    <div class="col">
                        <div class="card sideways">
                            <img src={p15} class="card-img-top middle" alt={p15} />
                            <div class="card-body">
                                <h5 class="card-title mid">Card title</h5>
                                <p class="card-text paragraph">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card sideways">
                            <img src={p16} class="card-img-top middle" alt={p16} />
                            <div class="card-body">
                                <h5 class="card-title mid">Card title</h5>
                                <p class="card-text paragraph">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                            </div>
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

export default Team
