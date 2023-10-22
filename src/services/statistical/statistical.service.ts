import { Observable } from 'rxjs';
import CoreService from '../core.service';
import { IRequestGetAllStatistics, IResponseGetAllStatistics, IResponseServer } from '../interfaces/api.interface';
import { STATISTICAL_URl } from './statistical.url';

export default class StatisticalService extends CoreService {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }

    public getStatistics(data: IRequestGetAllStatistics): Observable<IResponseServer<IResponseGetAllStatistics[]>> {
        const endpoint = STATISTICAL_URl.GET_ALL;
        return this.sendRequestApiWithAuth<IRequestGetAllStatistics>({
            endpoint: endpoint,
            payload: data,
        });
    }

    public getStatisticById(
        id: string,
        data: IRequestGetAllStatistics,
    ): Observable<IResponseServer<IResponseGetAllStatistics>> {
        const endpoint = STATISTICAL_URl.GET_ALL;
        endpoint.path = `${endpoint.path}/${id}`;
        return this.sendRequestApiWithAuth<IRequestGetAllStatistics>({
            endpoint: endpoint,
            payload: data,
        });
    }
}
