import classNames from 'classnames/bind';
import styles from './HeroBanner.module.scss';

import Slider from 'react-slick';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function HeroBanner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    };
    return (
        <div>
            <Slider {...settings}>
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
                <div className={cx('item')}>
                    <img src={images.banner1 || images.noImage} alt="" />
                </div>     
            </Slider>
        </div>
    );
}

export default HeroBanner;
