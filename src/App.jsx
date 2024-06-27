import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ToDoApp from './components/ToDoApp';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <div className="wrapper-body">
        <ToDoApp/>
      </div>
    </QueryClientProvider>
  );
}

export default App;

