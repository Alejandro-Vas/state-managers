import {Box, Button, LinearProgress, Typography} from '@mui/material';
import {useTodoStore} from '../../store/zustand/store';

const Todos = () => {
  const {todos, fetchTodos, clearTodos, isLoading} = useTodoStore((state) => state);

  if (isLoading) {
    return (
      <Box sx={{width: '300px', margin: '0 auto'}}>
        <Typography variant="h5">Loading...</Typography>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box sx={{mt: 4}}>
      <Button variant="contained" onClick={fetchTodos}>
        fetch todos
      </Button>
      <Button color="error" onClick={clearTodos} sx={{ml: 2}}>
        clear todos
      </Button>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </Box>
  );
};

export default Todos;
