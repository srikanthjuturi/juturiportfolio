import React from 'react';
import schoolimage from '../images/school.jpeg'
import collage from '../images/inter.jpeg'
import degree from '../images/degree.jpg'
import training from '../images/training.webp'
import BlurOnIcon from '@mui/icons-material/BlurOn';
import './Education.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
 


export default function Education() {
 
  return (
    <>
      <h1 className='text-center text-warning education-main'>Education</h1>
       
      <div className='container row'>

        <div className='col-2'> 
        <div className='main-div-for-icon-line' >
          <BlurOnIcon />
          <div className='line'></div>
        </div>
       </div>

      <div className='mt-0 details-div col-10'>
        <h3 className='heading'>Secondary Education</h3>
       
        <div className="row mt-4 ">
     <div className="col-sm-12 col-md-4 cart ">
        <img src={schoolimage} alt="netissue" />
        <div className='content'>
            <h1>School</h1>
        </div>
    </div>
    <div className=" col-sm-12 col-md-8 border border-light p-3 study-details">
        <h4 className='text-center'> Z.P HIGH SCHOOL V.REDDY PALEM</h4>
        <table className='mt-4'>
           <tbody> 
            <tr>
                <td>
                    <h5 >Medium <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                </td>
                <td><h5> &nbsp; English</h5></td>
            </tr>
            <tr>
                <td>
                    <h5 >Year of Pass-Out <span><ArrowRightAltIcon className=''/></span>  </h5>
                </td>
                <td><h5> &nbsp; 2018 march</h5></td>
            </tr>
            <tr>
                <td>
                    <h5 > CGPA <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                </td>
                <td><h5> &nbsp; 9.3</h5></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

      </div>
      </div>
      <div className='container row mt-5'>

            <div className='col-2'> 
            <div className='main-div-for-icon-line' >
            <BlurOnIcon />
            <div className='line'></div>
            </div>
            </div>

            <div className='mt-0 details-div col-10'>
            <h3 className='heading'>Intermidiate</h3>
           
            <div className="row mt-4 ">
                <div className="col-sm-12 col-md-4 cart ">
                    <img src={collage} alt="netissue1" />
                    <div className='content'>
                        <h1>12th Standared</h1>
                    </div>
                </div>
                <div className=" col-sm-12 col-md-8 border border-light p-3 study-details">
                    <h4 className='text-center'> VIDYA BHARATHI JR. COLLAGE NARASARAOPET</h4>
                    <table className='mt-4'>
                        <tbody> 
                        <tr>
                            <td>
                            <h5 >Medium <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                            </td>
                            <td><h5> &nbsp; English</h5></td>
                        </tr>
                        <tr>
                            <td>
                            <h5 >Group <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                            </td>
                            <td><h5> &nbsp; MPC</h5></td>
                        </tr>
                        <tr>
                            <td>
                            <h5 >Year of Pass-Out <span><ArrowRightAltIcon className=''/></span>  </h5>
                            </td>
                            <td><h5> &nbsp; 2020 march</h5></td>
                        </tr>
                        <tr>
                            <td>
                            <h5 > CGPA <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                            </td>
                            <td><h5> &nbsp; 9.54 </h5></td>
                        </tr>
                        <tr>
                            <td>
                            <h5 > Marks <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                            </td>
                            <td><h5> &nbsp; 907 </h5></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
</div>
<div className='container row mt-5 mb-5'>

<div className='col-2 '> 
<div className='main-div-for-icon-line' >
  <BlurOnIcon />
  <div className='line'></div>
</div>
</div>

<div className=' details-div col-10'>
<h3 className='heading'>Bachelor's Of Degree</h3>
 
 <div className="row mt-4 ">
    <div className="col-sm-12 col-md-4 cart ">
        <img src={degree} alt="netissue2" />
        <div className='content'>
            <h1>Degree</h1>
        </div>
    </div>
    <div className=" col-sm-12 col-md-8 border border-light p-3 study-details">
         <h4 className='text-center'> VAGDEVI DEGREE COLLAGE NARASARAOPET</h4>
         <table className='mt-4'>
            <tbody>
            <tr>
                <td>
                <h5 >Medium <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                </td>
                <td><h5> &nbsp; English</h5></td>
            </tr>
            <tr>
                <td>
                <h5 >Group <span><ArrowRightAltIcon className='w-50'/></span> </h5>
                </td>
                <td><h5> &nbsp; MPCS</h5></td>
            </tr>
            <tr>
                <td>
                <h5 >Year of Passing <span><ArrowRightAltIcon className=''/></span>  </h5>
                </td>
                <td><h5> &nbsp; 2023 Auguest</h5></td>
            </tr>
            <tr>
                <td>
                <h5 > percentage <span><ArrowRightAltIcon className='w-25'/></span> </h5>
                </td>
                <td><h5> &nbsp; 8.0 </h5></td>
            </tr>
            </tbody>
         </table>
    </div>
 </div>
</div>
</div>
      
<div className='container row mt-5 mb-5'>

<div className='col-2 '> 
<div className='main-div-for-icon-line' >
  <BlurOnIcon />
  <div className='line'></div>
</div>
</div>

<div className=' details-div col-10'>
<h3 className='heading'>SKILLS TRAINING</h3>
 
 <div className="row mt-4 ">
    <div className="col-sm-12 col-md-4 cart ">
        <img src={training} alt="netissue3" />
        <div className='content'>
            <h1>training</h1>
        </div>
    </div>
    <div className=" col-sm-12 col-md-8 border border-light p-3 study-details">
         <h4 className='text-center'> KAPIL IT SKILL HUB FINACIAL DISTRICT HYD</h4>
         <table className='mt-4'>
            <tbody>
            <tr>
                <td>
                <h5 >Course <span><ArrowRightAltIcon className='w-25'/></span> </h5>
                </td>
                <td><h5> &nbsp; Python Full Stack </h5></td>
            </tr>
           
            </tbody>
         </table>
    </div>
 </div>
</div>
</div>

    </>
  );
}
