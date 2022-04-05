import "./App.styles.scss";
import React from "react";
import Bloggers from './pages/Bloggers.component';


class App extends React.Component {

	render() {
		
		return (
			<React.Fragment>
				<Bloggers />
			</React.Fragment>
		)
	}
}

export default App;


