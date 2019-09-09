import React, { Component } from 'react';
import cx from 'classnames';

import './componentName.scss';

 class componentName extends Component {
    constructor(...args){
        super(...args);
}

    render(){
        const {} = this.props;
        return (
            <div />
        );
}
}


if (process.env.NODE_ENV !== 'production') {
    const PropTypes = __PROP_TYPES__;
    componentName.propTypes = {
        className: PropTypes.string,
};
};

componentName.defaultProps = {}

export default componentName