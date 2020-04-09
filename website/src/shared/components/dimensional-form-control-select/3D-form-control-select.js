import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ThreeDFormControlSelect = ({
    field1,
    field2,
    field3,
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
                value={objectDetails[field1][field2][field3]}
                onChange={event => {
                    !!fieldName
                    ? setObjectDetails({
                        ...objectDetails,
                        [field1]: {
                            ...objectDetails[field1],
                            [field2]: {
                                ...objectDetails[field1][field2],
                                [field3]: event.target.value,
                                [fieldName]: options[event.target.value]
                            }
                        }
                      })
                    : setObjectDetails({
                        ...objectDetails,
                        [field1]: {
                            ...objectDetails[field1],
                            [field2]: {
                                ...objectDetails[field1][field2],
                                [field3]: event.target.value
                            }
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

export default ThreeDFormControlSelect;