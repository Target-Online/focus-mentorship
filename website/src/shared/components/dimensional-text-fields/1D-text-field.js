import React from 'react';

import { TextField } from '@material-ui/core';

const CustomTextField = ({
    field,
    placeholder,
    helperText,
    type,
    objectDetails,
    setObjectDetails
}) => (
        <TextField
            type={type}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth={true}
            value={objectDetails[field]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field]: event.target.value
            })}
            margin={'normal'}
        />
    );

    export default CustomTextField;