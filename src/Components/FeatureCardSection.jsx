import React from 'react';
import FeatureCard from './FeatureCard';
import {star_img, back_img, support24_img} from '../Assets';

const FeatureSection = () => {
    return (
        <section className='flex flex-col lg:flex-row px-4 md:px-[10rem] py-10 lg:gap-10'>
            {/* <div className='flex flex-wrap justify-center'> */}
                <FeatureCard
                    imgSrc={star_img}
                    imgAlt="star"
                    title="High Quality"
                    description="All of our products go through very strict inspection before we dispatch them"
                />
                <FeatureCard
                    imgSrc={back_img}
                    imgAlt="back"
                    title="Easy Returns"
                    description="Our return policy is simple and that is why customers love our shop"
                />
                <FeatureCard
                    imgSrc={support24_img}
                    imgAlt="support"
                    title="Customer Service"
                    description="We offer amazing customer service no matter what happens"
                />
            {/* </div> */}
        </section>
    );
};

export default FeatureSection;
