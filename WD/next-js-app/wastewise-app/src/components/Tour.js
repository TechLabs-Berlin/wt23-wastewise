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
                    delay: 10000,
                    pauseOnMouseEnter: true
                }}
            >
                <SwiperSlide>
                    <div className="tour__slide-wrapper m-tour-1">
                        <div className="tour__text-wrapper">
                            <div className="tour__text">
                                <h1>Welcome</h1>
                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                                <p className="tour__text__p">Debitis aut assumenda impedit fugiat cupiditate numquam at, vel accusantium temporibus maiores!</p>
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
                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                                <p className="tour__text__p">Debitis aut assumenda impedit fugiat cupiditate numquam at, vel accusantium temporibus maiores!</p>
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
                                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                                <p className="tour__text__p">Debitis aut assumenda impedit fugiat cupiditate numquam at, vel accusantium temporibus maiores!</p>
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