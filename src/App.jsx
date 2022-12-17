import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './Layout';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
	return (
		<div className='app'>
			<Router>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='movie/:imdbID' element={<MovieDetail />} />
							<Route path='*' element={<PageNotFound />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
