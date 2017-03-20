
import React from 'react';
import update from 'react-addons-update';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div className='landing'>
                <div className='left'>
                    <div className='logo'></div>
                </div>
                <div className='right'>
                    <div className='title'>TGM</div>
                </div>
            </div>
        );
    }
}
