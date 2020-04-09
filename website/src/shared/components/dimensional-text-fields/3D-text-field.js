import React from 'react';

import { TextField } from '@material-ui/core';

const AcademicHistoryTextField = ({
    field1,
    field2,
    field3,
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
            value={objectDetails[field1][field2][field3]}
            onChange={event => setObjectDetails({
                ...objectDetails,
                [field1]: {
                    ...objectDetails[field1],
                   [field2]: {
                       ...objectDetails[field1][field2],
                       [field3]: event.target.value
                   }
                }
            })}
            margin={'normal'}
        />
    );

    export default AcademicHistoryTextField;