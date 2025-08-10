// import { Fragment } from "react";
// const GetName = (a,b) => {
//     return a + b;
// }

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle,name }) => {

// if (!title) {
//     throw new Error("El título no existe");
// }

    // console.log(props);
    return (
        // <Fragment>
        //<>   es lo mismo que un Fragment
        <> 
            {/* <h1>{ GetName(2,3) }</h1> */}
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
        // </Fragment>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Sebastián Beltrán', // Propiedad por defecto,
    subtitle: 'No hay subtítulo',
    title: 'No hay título',
}
