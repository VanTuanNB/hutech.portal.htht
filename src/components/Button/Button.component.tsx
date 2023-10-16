import { ReactElement } from "react";
import { IButton } from "./interface/Button.interface";
import classNames from "classnames/bind";
import styles from './Button.module.css';

const cx = classNames.bind(styles);

export default function Button({ text, numberOfUnits }: IButton): ReactElement {
    return <div>
        <button className={cx('button')}>{text}</button>
    </div>
}