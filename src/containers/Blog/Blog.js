import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';

import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	};

	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts/"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: '#fa923f',
										textDecoration: 'underline'
									}}
								>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink to={{
									pathname: '/new-post',
									hash: '#submit',
									search: '?quick-submit=true'
								}}
								>
									New post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
				<Switch>
					{this.state.auth && <Route path="/new-post" component={AsyncNewPost}/>}
					<Route path="/posts" component={Posts}/>
					<Route render={() => <h1>Not found</h1>}/>
					{/*<Redirect from="/" to="/posts"/>*/}
				</Switch>
			</div>
		);
	}
}

export default Blog;
