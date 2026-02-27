import {
  DataProvider,
  BaseRecord,
  GetListResponse,
  GetListParams,
} from '@refinedev/core';
import { MOCK_SUBJECTS } from '../constants';

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    const mockSubjects: BaseRecord[] = MOCK_SUBJECTS as unknown as BaseRecord[];

    if (resource !== 'subjects') {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {
    throw new Error('This function is not present in mock');
  },
  create: async () => {
    throw new Error('This function is not present in mock');
  },
  update: async () => {
    throw new Error('This function is not present in mock');
  },
  deleteOne: async () => {
    throw new Error('This function is not present in mock');
  },

  getApiUrl: () => '',
};
