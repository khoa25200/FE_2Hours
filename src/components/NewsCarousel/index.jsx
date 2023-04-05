import classNames from 'classnames/bind';
import styles from './NewsCarousel.module.scss';

import Slider from 'react-slick';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function NewsCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.girl || images.noImage} alt="" />
                    </div>
                    <div className={cx('text')}>
                        <span>
                            Launch campaigns but also find new customers. Our unique platform handles campaigns from
                            start to end.
                        </span>
                        <br />
                        <br />
                        <a href="#learn">Learn More ></a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default NewsCarousel;
