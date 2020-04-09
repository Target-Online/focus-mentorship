import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TwoDFormControlSelect = ({
    field1,
    field2,
    fieldName,
    label,
    options,
    classes,
    objectDetails,
    setObjectDetails,
}) => (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={field1} >{label}</InputLabel>
            <Select
                native
                autoWidth
                labelWidth={2}
                fieldName={objectDetails[field1][fieldName]}
                value={objectDetails[field1][field2]}
                onChange={event => {
                    !!fieldName
                    ? setObjectDetails({
                        ...objectDetails,
                        [field1]: {
                                ...objectDetails[field1],
                            [field2]: event.target.value,
                            [fieldName]: options[event.target.value]
                        }
                    })
                    : setObjectDetails({
                        ...objectDetails,
                        [field1]: {
                                ...objectDetails[field1],
                            [field2]: event.target.value
                        }
                    })
                }}
            >
                {options.map((prop, key) =>
                    <option value={key} key={key}>{prop}</option>
                )}

            </Select>
        </FormControl>
    );

export default TwoDFormControlSelect;