import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CharactersResponseType} from '../../types/SW';

const API_URL = 'https://swapi.dev/api';

type PayloadParamsType = {
  page: number;
};

export const swApi = createApi({
  reducerPath: 'api/swApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponseType, PayloadParamsType>({
      query: ({page}) => ({
        url: '/people',
        params: {page},
        responseHandler: (response) =>
          response.text().then((text) => JSON.parse(text.replace(/whhuanan/g, '"whhuanan"'))),
      }),
      serializeQueryArgs: ({endpointName}) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.results?.push(...(newItems.results || []));
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const {useGetCharactersQuery, usePrefetch} = swApi;
