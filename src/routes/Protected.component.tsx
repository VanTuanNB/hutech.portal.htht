import { Fragment, ReactElement } from "react";

import { Navigate } from "react-router-dom";

export default function ProtectedGrandRouter({ children }: { children: ReactElement }): ReactElement {
    const isLogin = false;
    return <Fragment>
        { isLogin ?  children : <Navigate to={'/404'} replace={true}/> }
    </Fragment>
}