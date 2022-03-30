import {Routes, Route} from 'react-router-dom'

//components
import { AuthViewC } from './core/auth/login/Login.container';
import { HomeC } from './core/home/home.container';

function App() {
	return (
		<>
		<Routes>
			<Route path='/home' element={<HomeC />} />
			<Route path='/login' element={<AuthViewC/>} />
			<Route path='/register' element={<AuthViewC/>} />
			<Route path='/favorites' element={<div> </div>} />
			<Route path='/detailCard' element={<div> </div>} />
		</Routes>
	</>
	)
}

export default App;
