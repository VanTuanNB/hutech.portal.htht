import { ReactElement } from 'react';

export default function AuthLayout({ children }: { children: ReactElement }) {
    return (
        <div className="">
            {children}
        </div>
    );
}
