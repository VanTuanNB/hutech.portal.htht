import { ReactElement } from 'react';
import Button from '../../components/Button/Button.component';
import StatisticalService from '../../services/statistical/statistical.service';
const statisticsService = new StatisticalService();
export default function HomePage(): ReactElement {
    // statisticsService.getStatistics({ page: 1, size: 10 });
    statisticsService.getStatisticById('taoLaId', { page: 1, size: 10 });
    // useEffect(() => {

    // }, []);
    return (
        <div>
            <h1>Home Page Component</h1>
            <Button text="Phat" numberOfUnits={1} />
        </div>
    );
}

// hooks: useState, useEffect, useCallback, useMemo, ....
