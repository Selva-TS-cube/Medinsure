import React from "react";
import './Blog.css';

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

const Blog = ({ darkMode }) => {
  return (
    <div id="Blog">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            Blog
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        
    <section className="container" id="blogs">
      <div className="blogs-content">
        <div className="blogs">
          <div className="blog">
            <img src="https://e0.pxfuel.com/wallpapers/320/558/desktop-wallpaper-a-s-k-insurance-danville-sunbury-and-lewisburg-professional-liability-insurance.jpg" alt="" />
            <div className="blog-text">
              <h4>
                The Role of Insurance in Navigating Life's Uncertainties
              </h4>
              <p>
              Discover how insurance shields you from life's uncertainties. Explore its vital role in providing financial security and peace of mind in emergencies and disasters. Learn about different types of coverage and how they offer reassurance in the unpredictable journey of life.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="https://e0.pxfuel.com/wallpapers/398/150/desktop-wallpaper-insurance-insurance-health-insurance-and-life-insurance.jpg" alt="" />
            <div className="blog-text">
              <h4>
                Life Insurance in Estate Planning and Legacy Preservation
              </h4>
              <p>
                Explore how life insurance intertwines with estate planning, ensuring your loved ones' financial security and preserving your legacy. Delve into the strategic use of life insurance policies to mitigate estate taxes, settle debts, and provide an inheritance for future generations, offering peace of mind for you and your family's future.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/Insurance.jpg" alt="" />
            <div className="blog-text">
              <h4>
                How Term Life Insurance Offers Affordable Protection for Specific Time Periods
              </h4>
              <p>
                Discover how term life insurance provides affordable protection for predetermined periods, offering peace of mind during critical life stages. This blog explores the flexibility and cost-effectiveness of term policies, ensuring financial security for your loved ones without long-term commitments.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="https://m.economictimes.com/thumb/msid-69278711,width-1200,height-900,resizemode-4,imgsize-132321/home-insurance-getty.jpg" alt="" />
            <div className="blog-text">
              <h4>
                Navigating Life Transitions: How PNB MetLife Insurance Solutions Provide Stability
              </h4>
              <p>
                Discover how PNB MetLife offers stability through life's transitions with tailored insurance solutions. This blog explores how their products provide financial security during pivotal moments, ensuring peace of mind as you navigate changes, from career shifts to family milestones.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/travel-insurance-3649247-3058762.png" alt="" />
            <div className="blog-text">
              <h4>
                Travel with Confidence: PNB MetLife's Travel Insurance Solutions for Safe Journeys
              </h4>
              <p>
                Explore the world with confidence knowing PNB MetLife has your back. Delve into their travel insurance solutions designed to safeguard your journeys, offering peace of mind and protection against unexpected mishaps. From lost luggage to medical emergencies, travel with assurance with PNB MetLife by your side.
              </p>
            </div>
          </div>
          <div className="blog">
            <img src="https://www.renewbuy.com/sites/default/files/2023-10/Asset%205%40300x%20%281%29.png" alt="" />
            <div className="blog-text">
              <h4>
                Protecting Your Family's Future: PNB MetLife's Family Insurance Plans
              </h4>
              <p>
                Discover the peace of mind that comes with PNB MetLife's family insurance plans. This blog explores how their tailored solutions protect your family's future, providing financial security and stability through life's twists and turns. From customizable coverage options to comprehensive benefits, safeguard your loved ones with PNB MetLife.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        
        </div>

      </div>
  );
};

export default Blog;
