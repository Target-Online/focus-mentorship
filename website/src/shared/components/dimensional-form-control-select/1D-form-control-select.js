import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FormControlSelect = ({
    field,
    fieldName,
    label,
    options,
    classes,
    extras,
    index,
    setExtras,
    objectDetails,
    setObjectDetails,
}) => (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={field} >{label}</InputLabel>
            <Select
                native
                autoWidth
                labelWidth={2}
                fieldName={objectDetails[fieldName]}
                value={objectDetails[field]}
                onChange={event => {
                    !!extras && setExtras({
                        ...extras,
                        race: event.target.value
                    });
                    !!fieldName
                        ? setObjectDetails({
                            ...objectDetails,
                            [field]: event.target.value == "Other" ? "" : event.target.value,
                            [fieldName]: options[event.target.value]
                        })
                        : setObjectDetails({
                            ...objectDetails,
                            [field]: event.target.value == "Other" ? "" : event.target.value,
                        })
                }
                }
            >
                {options.map((prop, key) =>
                    <option value={!!index ? key : prop} prop={prop} key={key}>{prop}</option>

                )}

            </Select>
        </FormControl>
    );

export default FormControlSelect;