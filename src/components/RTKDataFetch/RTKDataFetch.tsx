import {useState} from 'react';
import {useGetCharactersQuery} from '../../store/RTK/swApi';
import {Button, CircularProgress} from '@mui/material';

const RTKDataFetch = () => {
  const [page, setPage] = useState(1);

  const {data, isLoading, isFetching} = useGetCharactersQuery({page});

  // const prefetch = usePrefetch('getCharacters');

  const {count = 0, results: characters = []} = data || {};

  const isAllLoaded = (characters || []).length >= count;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {!isLoading && (
        <div>
          {characters?.map((character) => (
            <div key={character.name}>{character.name}</div>
          ))}
        </div>
      )}

      {isLoading || isFetching ? (
        <CircularProgress sx={{mt: 2}} />
      ) : (
        <Button
          variant="contained"
          onClick={handleLoadMore}
          disabled={isLoading || isFetching || isAllLoaded}
          // onMouseEnter={() => {
          //   prefetch({page: page + 1});
          // }}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default RTKDataFetch;
