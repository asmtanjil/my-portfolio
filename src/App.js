import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes';
import './mainBg.css';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-secondary">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
