import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Pagination, Autoplay]);

const Tour = () => {

    return (
        <div className="tour">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
				pagination={{ 
                    clickable: true,
                    bulletClass: 'tour__pagination__item',
                    bulletActiveClass: 'tour__pagination__item--active',
                    bulletElement: 'div'
                }}
                autoplay={{ 
                    delay: 15000,
                    pauseOnMouseEnter: true
                }}
            >
                <SwiperSlide data-swiper-autoplay="19000">
                    <div className="tour__slide-wrapper m-tour-1">
                        <div className="tour__text-wrapper">
                            <div className="tour__text">
                                <h1 className="tour__text__h1">Sort smarter.</h1>
                                <h2>Not harder. For the love of our planet. With WasteWise.</h2>
                                <p className="tour__text__p">Do you want to recycle your waste? Great! But you don’t know where to put it? Just use WasteWise! <Link href="/scan">Scan</Link> your garbage and I will tell you which bin it belongs in.</p>
                            </div>
                        </div>
                        <div className="tour__image-container">
                            <img
                                className="tour__image"
                                src="images/undraw_throw_away_modified.svg"
                                alt="a person disposing of something"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour__slide-wrapper m-tour-2">
                        <div className="tour__image-container">
                            <img
                                className="tour__image"
                                src="images/undraw_personal_goals_modified.svg"
                                alt="a person sitting in front of a piechart"
                            />
                        </div>
                        <div className="tour__text-wrapper">
                            <div className="tour__text">
                                <h2>Find out more about your personal waste production. <span className="u-badge-coming-soon">Coming soon</span></h2>
                                <p className="tour__text__p">Based on your use of WasteWise, <Link href="/predictions">Predictions</Link> will assume the amount and type of waste you will produce in the future. For what reason? Prove me wrong, try to do better! Consume consciously and take important steps towards a more sustainable life.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour__slide-wrapper m-tour-3">
                        <div className="tour__image-container">
                            <img
                                className="tour__image"
                                src="images/undraw_charts_modified.svg"
                                alt="a person looking at some charts"
                            />
                        </div>
                        <div className="tour__text-wrapper">
                            <div className="tour__text">
                                <h2>Do you like numbers? Me too.</h2>
                                <p className="tour__text__p">But I wish they were lower! Just take a look at the <Link href="/charts">Charts</Link> section. No matter where in the world, we humans produce far too much waste of all kind. It is high time we changed our behavior. <b>Become part of a sustainable future today. Use WasteWise.</b></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Link href="/scan" className="button tour__button">Get started</Link>
        </div>
    );
};

export default Tour;