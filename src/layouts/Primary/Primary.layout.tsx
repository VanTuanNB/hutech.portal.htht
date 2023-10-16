import { ReactElement } from "react";
import { IPrimaryLayout } from "./interfaces/primary.interface";

export default function PrimaryLayout({ children }: IPrimaryLayout): ReactElement {
    return <div className="primaryLayout">
        {children}
    </div>
}