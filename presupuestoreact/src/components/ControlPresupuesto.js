import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlPrespuesto = ({presupuesto, restante}) => {
    return(
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    )
}

export default ControlPrespuesto;