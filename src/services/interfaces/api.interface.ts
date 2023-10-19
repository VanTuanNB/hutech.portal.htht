export interface IConfigApiUrl {
    path: string;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
}

export interface IConfigService {
    [key: string]: IConfigApiUrl;
}
