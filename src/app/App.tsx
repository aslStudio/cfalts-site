import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { RouterView } from './router'

function App() {
  return (
		<div>
			<ToastContainer />
			<BrowserRouter>
				<RouterView />
			</BrowserRouter>
		</div>
  );
}

export default App;
