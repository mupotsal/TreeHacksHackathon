import React from 'react';
import './Home.css';
import './components/Home/Home';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h2 className="header2">
                    This is my Home Component
                </h2>

            </div>
        );
    }
}

export default Home;