import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import RouterLink from './../RouterLink/index';
import SignUpButton from './../SignUpButton/index';
import { useDevice } from 'react-use-device';

import Logo from './../Logo/index';
const cx = classNames.bind(styles);
function Footer() {
    const { isMOBILE } = useDevice();

    return (
        <footer className={cx('footer')}>
            <div className={cx('footer--top')}>
                <div className={cx('footer--left')}>
                    <Logo />
                </div>
                <div className={cx('footer--right')}>
                    <div className={cx('list1')}>
                        <div className={cx('list1-left')}>
                            <a href="#Features">Features</a>
                            <a href="#Pricing">Pricing</a>
                            <a href="#Services">Services</a>
                            <a href="#Partners">Partners</a>
                        </div>
                        <div className={cx('list1-right')}>
                            <a href="#About Us">About Us</a>
                            <a href="#Tutorials">Tutorials</a>
                            <a href="#Resources">Resources</a>
                            <a href="#Help Center">Help Center</a>
                            <a href="#Templates">Templates</a>
                            <a href="#Case Studies">Case Studies</a>
                        </div>
                    </div>
                    <div className={cx('list2')}>
                        <div className={cx('list2-left')}>
                            <a href="#Medium">Medium</a>
                            <a href="#Twitter">Twitter</a>
                            <a href="#Facebook">Facebook</a>
                            <a href="#Instagram">Instagram</a>
                            <a href="#LinkedIn">LinkedIn</a>
                        </div>
                        <div className={cx('list2-right')}>
                            <a href="#Contact Us">Contact Us</a>
                            <a href="#Slack">Slack</a>
                            <a href="#Jobs">Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('divider')}></div>
            <div className={cx('footer--addition')}>
                <div>NinjaMail is a sample project for Quest AI. </div>
                <div>© 2019 Quest AI, All rights reserved. </div>
                {isMOBILE && (
                    <>
                        <br />
                    </>
                )}
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </div>
        </footer>
    );
}

export default Footer;
