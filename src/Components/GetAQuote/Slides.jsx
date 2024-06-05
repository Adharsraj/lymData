import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: black;
  overflow: hidden;
`;

const SlidesContainer = styled.div`
  display: flex;
  width: 500%;
`;

const Slide = styled.div`
  flex: 0 0 20%;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  color: skyblue;
  font-size: 90px;
  line-height: 1.2;
  position: relative;

  @media (max-width: 768px) {
    order: 1;
    font-size: 40px;
    text-align: center;
  }
`;

const BottomSection = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 768px) {
    order: 2;
    font-size: 18px;
    text-align: center;
  }
`;

const SliderIcon = styled.div`
  position: absolute;
  left: 180px;
  bottom: 0px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    margin-top: 0px;
  }
`;

const Line = styled.div`
  width: 70px;
  height: 2px;
  background-color: ${props => props.isActive ? 'skyblue' : 'white'};
  margin-right: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Slides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const descriptions = [
    "Boost your online visibility with the assistance of our specialized web development services. Our team excels in crafting user-centric web experiences that prioritize the needs of your audience. From seamless navigation to visually stunning designs, we ensure every detail contributes to business success, creating a powerful online presence that leaves a lasting impression.",
    "By leveraging our proficiency in Mobile App Development, your organization can maximize its potential. Boasting a proven track record, we excel in creating highly popular and widely used apps. Our approach combines data insights with principles of behavioral science, ensuring your mobile app not only meets but exceeds user expectations, fostering engagement and success.",
    "Enhance your digital presence with reliability by utilizing our performance marketing services. Specializing in data-driven strategies, we offer a comprehensive range of solutions including SEO, PPC, social media, and email marketing. By aligning our efforts with your business objectives, we ensure every marketing initiative contributes to measurable success, driving growth and visibility.",
    "Recognizing the transformative power of data-driven insights, our Data Engineering services employ advanced analytics methodologies to achieve significant outcomes. Whether it's uncovering hidden trends, optimizing processes, or making informed decisions, our team harnesses the potential of data to propel your business forward. Experience the difference that data-driven intelligence can make for your organization.",
  ];

  return (
    <CarouselContainer>
      <h4 className="lg:text-[30px] lg:p-12 lg:px-28 text-[25px] font-thin p-3 text-center text-white">
        Our Services
      </h4>
      <SlidesContainer ref={slidesRef} style={{ transform: `translateX(-${activeSlide * 20}%)` }}>
        {["Web Development", "App Development", "Website Designing", "Data Engineering"].map((topic, index) => (
          <Slide key={index}>
            <TopSection>
              {topic}
            </TopSection>
            <BottomSection>
              {descriptions[index]}
            </BottomSection>
            <SliderIcon>
              {[0, 1, 2, 3].map((_, i) => (
                <Line key={i} isActive={i === activeSlide} />
              ))}
            </SliderIcon>
          </Slide>
        ))}
      </SlidesContainer>
    </CarouselContainer>
  );
};

export default Slides;
