import { ReactElement } from 'react';
import Button from '../../components/Button/Button.component';

export default function HomePage(): ReactElement {
    return (
        <div>
            <h1>Home Page Component</h1>
            <Button text="Phat" numberOfUnits={1} />
        </div>
    );
}

// hooks: useState, useEffect, useCallback, useMemo, ....
