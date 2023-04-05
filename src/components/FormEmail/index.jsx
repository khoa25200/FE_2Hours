import images from '~/assets/images';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './FormEmail.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FormEmail() {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            alert('Something went wrong!');
            return;
        }

        alert(`Thanks ${formData.name}, I will shortly connect with you!`);
        axios.post('https://formspree.io/f/mbjezely', formData, {
            Accept: 'application/json',
        });
        setFormData({});
    };
    const [formData, setFormData] = useState(new FormData());
    return (
        <form action="" className={cx('form')}>
            <input type="email" id='email' name="email" value={formData.email || ''} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
                JOIN OUR LIST
            </button>
            <br />
            <label htmlFor="" placeholder="Enter your email">
                Thanks! Email received.
            </label>
        </form>
    );
}

export default FormEmail;
