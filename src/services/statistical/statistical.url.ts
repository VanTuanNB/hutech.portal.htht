import { IConfigService } from '../interfaces/api.interface';

export const STATISTICAL_URl: IConfigService = {
    GET_ALL: {
        path: '/statistical/search',
        method: 'GET',
    },
    GET_BY_ID: {
        path: '/statistical/search', // slug
        method: 'GET',
    },
};
