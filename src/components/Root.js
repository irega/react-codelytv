
import React from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
	<BrowserRouter>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/videos">Videos</Link>
					</li>
				</ul>
			</nav>
			<Redirect
				from="/"
				to="/videos" />
			<Route exact path="/about" component={About} />
			<Route exact path="/videos" component={List} />
			<Route exact path="/videos/:id" component={Detail} />
		</div>
	</BrowserRouter>
);

export default Root;