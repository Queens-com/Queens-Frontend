import React, { useState, useEffect, useRef } from 'react';

const Testimonial = ({ place, time, content, userName }) => (
  <div className='flex flex-col min-w-[400px] p-10 bg-white shadow-md mx-4'>
    <div className='mb-6'>
      <span className='pr-5'>{userName}</span>
      <span className=''>|</span>
      <span className='pl-2'>{time}</span>
    </div>
    <div className='leading-tight'>
      "{content}"
    <div className='my-2'>
      <span className='bricolage text-label text-sm'>{place}</span>
    </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    { place: 'New York', time: '2:30pm', content: 'Simply the best. Better than all the rest.', userName: 'John Doe' },
    { place: 'London', time: '10:00am', content: 'Exceptional service and quality.', userName: 'Jane Smith' },
    { place: 'Tokyo', time: '7:45pm', content: 'Incredible experience, highly recommended!', userName: 'Akira Tanaka' },
    { place: 'Paris', time: '3:15pm', content: 'Outstanding product, exceeded my expectations.', userName: 'Marie Dupont' },
    { place: 'Sydney', time: '9:00am', content: 'Top-notch service, will definitely use again.', userName: 'Emma Wilson' },
    { place: 'Berlin', time: '5:45pm', content: 'Innovative solution to a complex problem.', userName: 'Hans Mueller' },
    { place: 'Toronto', time: '11:30am', content: 'Reliable and efficient, a game-changer for my business.', userName: 'Mike Thompson' },
    { place: 'Mumbai', time: '7:00pm', content: 'Exceptional customer support and product quality.', userName: 'Priya Patel' },
    { place: 'Seoul', time: '8:45am', content: 'Sleek design and powerful features, highly recommend.', userName: 'Ji-soo Kim' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // the scrollling efect

    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const itemWidth = scrollWidth / testimonials.length;
      scrollRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, testimonials.length]);

  return (
    <section className='mt-[10rem] w-full overflow-hidden relative'>
      <span className='block text-center bricolage font-bold text-3xl mb-8'>
        Testimonials
      </span>
      <div 
        ref={scrollRef}
        className='flex overflow-x-hidden scroll-smooth'
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      <div className='absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent'></div>
      <div className='absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent'></div>
    </section>
  );
};

export default Testimonials;