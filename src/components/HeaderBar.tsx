import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import pageTest from './TestPage';
import mainInfo from './MainInfo';

class HeaderBar extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/mainInfo'>Home</Link></li>
                            <li><Link to='/testpage'>TestPage</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/mainInfo" component={mainInfo}/>
                    <Route path="/testpage" component={pageTest} />
                </Switch>
            </div>
        );
    }
}

export default HeaderBar;
