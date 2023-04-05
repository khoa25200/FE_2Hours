import classNames from 'classnames/bind';
import styles from './FounderMembersCourosel.module.scss';

import Slider from 'react-slick';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function FounderMembersCourosel() {
    const settings = {
        dots: false,
        infinite: true,
        autoPlay: true,
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
            <Slider {...settings} className={cx('items')}>
                <div className={cx('item')}>
                    <img src={images.founder1 || images.noImage} alt="" />
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Frankie</h3>
                        <span className={cx('des')}>Member since 2016</span>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src={images.founder1 || images.noImage} alt="" />
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Frankie</h3>
                        <span className={cx('des')}>Member since 2016</span>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src={images.founder1 || images.noImage} alt="" />
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Frankie</h3>
                        <span className={cx('des')}>Member since 2016</span>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src={images.founder1 || images.noImage} alt="" />
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Frankie</h3>
                        <span className={cx('des')}>Member since 2016</span>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src={images.founder1 || images.noImage} alt="" />
                    <div className={cx('text')}>
                        <h3 className={cx('title')}>Frankie</h3>
                        <span className={cx('des')}>Member since 2016</span>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default FounderMembersCourosel;
