import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import images from '~/assets/images';
// import images from '~/assets/images';
import { useDevice } from 'react-use-device';

import Header from './../../components/Header/index';
import HeroBanner from './../../components/HeroBanner/index';
import Footer from './../../components/Footer/index';
import NewsCarousel from './../../components/NewsCarousel/index';
import FormEmail from './../../components/FormEmail/index';
import LogoCarousel from './../../components/LogoCarousel/index';
import FounderMembersCourosel from './../../components/FounderMembersCourosel/index';

const cx = classNames.bind(styles);
function HomePage() {
    const { isDESKTOP } = useDevice();

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <section className={cx('main--banner')}>
                    <HeroBanner />
                </section>
                <div className={cx('space')}></div>
                <section className={cx('reach-more')}>
                    <div className={cx('content')}>
                        <img src={images.video} alt="Video" />
                        <div className={cx('text-content')}>
                            <h1>Reach More Customers</h1>
                            <button className={cx('learnhowbtn')}>LEARN HOW</button>
                        </div>
                    </div>
                </section>
                {!isDESKTOP && <div className={cx('space')}></div>}
                <h1 className={cx('title-section')}>All the popular news </h1>
                <section className={cx('news')}>
                    <NewsCarousel />
                </section>
                <div className={cx('space')}></div>
                <h1 className={cx('title-section')}>All the co-founding members</h1>
                <section className={cx('co-founder')}>
                    <FounderMembersCourosel />
                </section>
                <div className={cx('space')}></div>
                <h1 className={cx('title-section')}>
                    Learn how others are reaching their audience easier than ever before.
                </h1>
                <FormEmail />
                <div className={cx('space')}></div>
                <h1 className={cx('title-section')}>All the best brands already use us.</h1>
                <section className={cx('logocarousel')}>
                    <LogoCarousel />
                </section>
                <div className={cx('space')}></div>
                <section className={cx('get-started')}>
                    <div>
                        <h1>Get started today!</h1>
                        <button className={cx('pick')}>PICK A PLAN</button>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
