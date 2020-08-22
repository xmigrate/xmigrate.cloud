
import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = () => {
    var Title = 'Xmigrate';
    return (
        <Helmet>
            <title>{ Title }</title>
        </Helmet>
    );
};

export { TitleComponent };