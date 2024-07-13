import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_btn} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_btn} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William</h3>
                  <span>Tetra USA</span>
                </div>
              </div>
              <p>On top of super-strong knowledge of web technology, Bilal demonstrated the best attitude and business approach
                 </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Bilal</h3>
                  <span>Tetra USA</span>
                </div>
              </div>
              <p>On top of super-strong knowledge of web technology, Bilal demonstrated the best attitude and business approach
                 </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Waqqar</h3>
                  <span>Tetra USA</span>
                </div>
              </div>
              <p>On top of super-strong knowledge of web technology, Bilal demonstrated the best attitude and business approach
                 .</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Usman</h3>
                  <span>Tetra USA</span>
                </div>
              </div>
              <p>On top of super-strong knowledge of web technology, Bilal demonstrated the best attitude and business approach
                  </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials