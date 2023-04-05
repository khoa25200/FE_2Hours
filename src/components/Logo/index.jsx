import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Logo() {
    return (
        <div className={cx('logo')}>
            <img src={images.logo} alt="Logo" />
            <div className={cx('text')}>NinjaMail</div>
        </div>
    );
}

export default Logo;
