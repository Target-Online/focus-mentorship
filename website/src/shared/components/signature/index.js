import './index.css';

import 'date-fns';

import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import ThreeDTextField from '../dimensional-text-fields/3D-text-field'

const Signature = ({
    field1,
    field2,
    placeholder,
    helperText,
    objectDetails,
    setObjectDetails
}) => {

    return (
        <>
            <ThreeDTextField
                field1={field1}
                field2={field2}
                field3={'signatureInitials'}
                type="text"
                placeholder={placeholder}
                helperText={helperText}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    value={(objectDetails[field1][field2]['date'])}
                    onChange={value => setObjectDetails({
                        ...objectDetails,
                        [field1]: {
                            ...objectDetails[field1],
                            [field2]: {
                                ...objectDetails[field1][field2],
                                ['date']: value.toDateString()
                            }
                        }
                    })}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    )
}

export default Signature;