import React from 'react';
import Photo from "./in_lifting_others_we_rise.jpg";
import Founder from "./founder.jpg"
import coFounder from "./co-founder.jpg"
export default function AboutUs() {
  return (
    <main className='flex flex-col h-screen'>
      <div className='bg-white flex-grow'>
        <div
          className=' mt-5 bg-center bg-cover h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full max-w-screen mx-auto overflow-hidden rounded-sm'
          style={{ backgroundImage: `url(${Photo})` }}
        ></div>
        <div className='bg-white'>
<h1>Mission</h1>
<p>Our mission is to bring smiles to those who are struggling and to fill hearts
with hope, showing them there is more to life than sorrow. We provide physical and mental
support to families, educate the youth, and donate resources to benefit the less fortunate.</p>
        </div>
        <div className='bg-white'>
<h1>Vision</h1>
<p>The Smiles Foundation's vision is to create a world where there is more joy than sorrow,
 and everyone has access to the resources and support they need to thrive.
 We strive to fill the hearts of those who are struggling with hope, demonstrating that
 there is always more to life than the difficulties they face.</p>
        </div>
        <div>
          <h1>Team</h1>
          <p>Our team is made up of dedicated individuals who are passionate about making a difference in the community</p>
          <div>
            <ul className='flex gap-3'>
              <li><img src={Founder}/></li>
              <li><img src={coFounder}/></li>
            </ul>
            <div>
              <h1>group photo</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}