import { FunctionComponent, ReactElement } from 'react';

export interface IRoute {
    path: string;
    component: FunctionComponent;
    protected?: ({ children }: { children: ReactElement }) => ReactElement;
    layout?: ({ children }: { children: ReactElement }) => ReactElement;
}
