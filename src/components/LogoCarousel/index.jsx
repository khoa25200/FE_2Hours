import classNames from 'classnames/bind';
import styles from './LogoCarousel.module.scss';

import Slider from 'react-slick';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function LogoCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
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
                        <img src={images.logo1 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo2 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo3 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo4 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo5 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo1 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo2 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo3 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo4 || images.noImage} alt="" />
                    </div>
                </div>
                <div className={cx('item')}>
                    <div>
                        <img src={images.logo5 || images.noImage} alt="" />
                    </div>
                </div>
                
            </Slider>
        </div>
    );
}

export default LogoCarousel;
