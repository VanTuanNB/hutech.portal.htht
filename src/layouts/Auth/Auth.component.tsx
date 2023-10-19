import { ReactElement } from 'react';

export default function AuthLayout({ children }: { children: ReactElement }) {
    return (
        <div className="">
            <h1>Auth layout component</h1>
            {children}
        </div>
    );
}
