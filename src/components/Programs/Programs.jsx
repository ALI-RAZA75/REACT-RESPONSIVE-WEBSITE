import React from 'react'
import './Programs.css'
import Program_img_1 from '../../assets/program-1.png'
import Program_img_2 from '../../assets/program-2.png'
import Program_img_3 from '../../assets/program-3.png'
import Prgram_icon_1 from '../../assets/program-icon-1.png'
import Prgram_icon_2 from '../../assets/program-icon-2.png'
import Prgram_icon_3 from '../../assets/program-icon-3.png'


function Programs() {
  return (
    <div className='Programs'>
        <div className="program">
            <img src={Program_img_1} alt="" />
            <div className="caption">
                <img src={Prgram_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_img_2} alt="" />
            <div className="caption">
                <img src={Prgram_icon_2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_img_3} alt="" />
            <div className="caption">
                <img src={Prgram_icon_3} alt="" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs