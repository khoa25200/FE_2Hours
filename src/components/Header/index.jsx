import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import RouterLink from './../RouterLink/index';
import SignUpButton from './../SignUpButton/index';
import Logo from './../Logo/index';
const cx = classNames.bind(styles);
function Header() {
    return ( 
        <header className={cx('header')}>
            <Logo />
            <div className={cx('right')}>
                <RouterLink />
                <SignUpButton/>
            </div>
        </header>
     );
}

export default Header;