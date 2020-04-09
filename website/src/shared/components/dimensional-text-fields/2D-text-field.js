import React from 'react';

import { TextField } from '@material-ui/core';

const AcademicHistoryTextField = ({
    field1,
    placeholder,
    helperText,
    type,
    field2,
    objectDetails,
    setObjectDetails
}) => (
        <TextField
            type={type}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth={true}
            value={objectDetails[field1][field2]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field1]: {
                    ...objectDetails[field1],
                   [field2]: event.target.value
                }
            })}
            margin={'normal'}
        />
    );

    export default AcademicHistoryTextField;