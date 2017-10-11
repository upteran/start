import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Pane extends Component {
    static displayName = 'Pane';

    render() {
        let classActive = (this.props.currTab === this.props.label) ? 'active' : '';
        return (
            <div className={"tabs-content-item " + classActive}>
                {this.props.children}
            </div>
        )
    }
}