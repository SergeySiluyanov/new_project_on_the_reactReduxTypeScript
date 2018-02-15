import * as React from 'react';
import { connect } from 'react-redux';
import { actionMain } from '../actions/actionMain';

class MainView extends React.Component {

    props: any;
    componentDidMount() {
        this.props.actionMain();
    }

    render() {
        return(
            <div>
                {
                    this.props.message 
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.main.message,
    }
}

export default connect(mapStateToProps, { actionMain })(MainView);