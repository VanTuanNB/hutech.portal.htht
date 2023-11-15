// common interface service
export interface IConfigApiUrl {
    path: string;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
}

export interface IConfigService {
    [key: string]: IConfigApiUrl;
}

export interface IRequestParamApi<T = any> {
    endpoint: IConfigApiUrl;
    payload: T;
    options?: {
        isSaveQueryParams?: boolean;
        header: {};
    };
}

export interface IResponseServer<T> {
    status: number;
    isSuccess: boolean;
    data: T;
    message: string;
}
// ----------------- start statistical ---------------------------
export interface IRequestGetAllStatistics {
    page: number;
    size: number;
    mode: string;
}

export interface IResponseGetAllStatistics {
    username: string;
    age: number;
}
// ----------------- end statistical ---------------------------
