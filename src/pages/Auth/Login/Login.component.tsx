import classNames from 'classnames/bind';
import React from 'react';
import styles from './Login.module.css';

const cx = classNames.bind(styles);

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    return (
        <form className={cx('form')}>
            <div className={cx('flex-column')}>
                <label>Email </label>
            </div>
            <div className={cx("inputForm")}>
                <input type="text" className={cx('input')} placeholder="Enter your Email" />
            </div>

            <div className={cx('flex-column')}>
                <label>Password </label>
            </div>
            <div className={cx("inputForm")}>
                <input type="password" className={cx("input")} placeholder="Enter your Password" />
            </div>

            <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
                <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit">Sign In</button>
            <p className="p">
                Don't have an account? <span className="span">Sign Up</span>
            </p>
            <p className="p line">Or With</p>

            <div className="flex-row">
                <button className="btn google">Google</button>
                <button className="btn apple">Apple</button>
            </div>
        </form>
    );
};

export default Login;
