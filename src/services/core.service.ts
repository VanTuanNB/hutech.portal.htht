import { catchError, from, switchMap } from 'rxjs';
import { KEY_LOCAL_STORAGE } from '../utils/constants/storage.constant';
import { getLocalStorage } from '../utils/storage.util';
import { IRequestParamApi } from './interfaces/api.interface';

export default class CoreService {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {}

    private getToken(): string {
        return getLocalStorage(KEY_LOCAL_STORAGE.USER_TOKEN) ?? '';
    }

    private formattedQueryParameters<T>(data: T): string {
        try {
            let stringQueryUrl = '';
            for (let key in data) {
                stringQueryUrl += `?${key}=${data[key]}`;
            }
            return stringQueryUrl;
        } catch (error) {
            return '';
        }
    }

    protected sendRequestApiWithAuth<T>(data: IRequestParamApi<T>) {
        const token = this.getToken();
        if (!token) throw new Error('No token provided from storage');
        switch (data.endpoint.method) {
            case 'GET':
                const formattedQueryString = this.formattedQueryParameters(data.payload);
                if (!formattedQueryString) throw new Error('Error get api query parameters');
                data.endpoint.path = data.endpoint.path + formattedQueryString;
                break;
            default:
                break;
        }
        return from(
            fetch(data.endpoint.path, {
                method: data.endpoint.method,
                body:
                    data.endpoint.method === 'GET' || data.endpoint.method === 'HEAD'
                        ? undefined
                        : (data.payload as BodyInit),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            }),
        ).pipe(
            switchMap((response) => response.json()),
            catchError((error) => {
                console.error('Error:', error);
                return [error];
            }),
        );
    }

    protected sendRequestApiNoAuth<T>(data: IRequestParamApi<T>) {
        switch (data.endpoint.method) {
            case 'GET':
                const formattedQueryString = this.formattedQueryParameters(data.payload);
                if (!formattedQueryString) throw new Error('Error get api query parameters');
                data.endpoint.path = data.endpoint.path + formattedQueryString;
                break;
            default:
                break;
        }
        return from(
            fetch(data.endpoint.path, {
                method: data.endpoint.method,
                body:
                    data.endpoint.method === 'GET' || data.endpoint.method === 'HEAD'
                        ? undefined
                        : (data.payload as BodyInit),
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        ).pipe(
            switchMap((response) => response.json()),
            catchError((error) => {
                console.error('Error:', error);
                return [error];
            }),
        );
    }
}
