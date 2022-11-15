import React from 'react';
import notFound from "../../../images/404.jpg";

const NotFound = () => {
    return (
        <div>
            <h2 className="text-primary text-center">404!!! The mechanic you are looking for is now Sleeping</h2>
            <img src={notFound} height="300" width="300" alt="" />
        </div>
    );
};

export default NotFound;