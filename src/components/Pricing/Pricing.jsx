import React from "react";
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRightLong } from "react-icons/fa6";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Pricing = ({ darkMode }) => {
  return (
    <div id="Pricing">
      <div className=" container  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            Pricing
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        
        <section class="white-section" id="pricing">

<h2 class="section-heading">Protect your loved ones through the Circle of Life</h2>

<div class="row">

  <div class="pricing-col col-lg-4 col-md-6">
    <div class="card shadow-lg">
      <div class="card-header">
        <h3>Family Protection Plans</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">Mera Term Plan Plus.</h2>
        <p>1. Whole Life Coverage till the age of 99.</p>
        <p>2. Cover your spouse under the same plan</p>
        <p>3. Option to get back the premiums on survival</p>
        <p>4. Child Education Benefit</p>
        <div class="d-grid gap-2 pt-3">
        <a href="https://www.pnbmetlife.com/insurance-plans/family-protection/pnb-metlife-mera-term-plan-plus.html" className="btn btn-lg btn-outline-dark price-btn w-100" target="_blank" rel="noopener noreferrer">Click here</a>
        </div>
      </div>
    </div>
  </div>

  <div class="pricing-col col-lg-4 col-md-6">
    <div class="card shadow-lg">
      <div id="important" class="card-header">
        <h3>Family Protection Plans</h3>
      </div>
      <div id="important1" class="card-body">
        <h2 class="price-text">Aajeevan Suraksha Plan</h2>
        <p id="important2" >1. Supporting education of girls between the ages of 6 and 14 in West Bengal.</p>
        <p id="important2" >2. Providing vocational training for women in UP.</p>
        <p id="important2" >3. Enhances financial security for adolescent girls.</p>
        <p id="important2" >4. PNB MetLife has a digital payment portal for customers to pay premiums and renew policies online.</p>
        <div class="d-grid gap-2 pt-3">
        <a href="https://www.pnbmetlife.com/insurance-plans/family-protection/pnb-metlife-aajeevan-suraksha-plan.html" className="btn btn-lg btn-outline-light price-btn w-100" target="_blank" rel="noopener noreferrer">Click here</a>
        </div>
      </div>
    </div>
  </div>

  <div class="pricing-col col-lg-4 col-md-12">
    <div class="card shadow-lg">
      <div class="card-header">
        <h3>MLong Term Savings Plans</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">PNB MetLife Goal Ensuring Multiplier</h2>
        <p>1. Return of Fund Management!,Premium Allocation & Mortality Charges</p>
        <p>2. Choose from 13 Diverse Funds</p>
        <p>3. Exclusive Smart Child Option</p>
        <p>4. Waiver of Premium on Death or Critical Illness</p>
        <div class="d-grid gap-2 pt-3">
        <a href="https://www.pnbmetlife.com/insurance-plans/long-term-savings/pnb-metlife-goal-ensuring-multiplier.html" className="btn btn-lg btn-outline-dark price-btn w-100" target="_blank" rel="noopener noreferrer">Click here</a>
        </div>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" className="justify-end buttons flex gap-5">
            
            <a
              href="https://www.pnbmetlife.com/life-insurance-plans.html"
              target="_blank" rel="noopener noreferrer"
              className="flex text-red-50 items-center gap-2 border- text-[1.2rem] bg-black border-black px-7 py-6 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Click Here to see more plans <FaArrowRightLong />
              </div>
            </a>
          </div>

</div>

</section>
        
        </div>

      </div>
  );
};

export default Pricing;
