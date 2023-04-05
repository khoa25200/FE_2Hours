import classNames from 'classnames/bind';
import styles from './SignUpButton.module.scss';
const cx = classNames.bind(styles);
function SignUpButton() {
    return ( 
        <button className={cx('signup')}>
            SIGN UP FREE
        </button>
     );
}

export default SignUpButton;