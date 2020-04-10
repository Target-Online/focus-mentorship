import React from 'react';

import CustomeTextField from '../dimensional-text-fields/2D-text-field'

const Address = ({
    helperText,
    field1,
    objectDetails,
    setObjectDetails
}) => {

    return (
        <>
            <CustomeTextField
                field1={field1}
                field2={'line1'}
                type="text"
                placeholder={"Line 1"}
                helperText={helperText}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                field2={'line2'}
                type="text"
                placeholder={"Line 2"}
                helperText={helperText}
                field1={field1}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                field2={'line3'}
                type="text"
                placeholder={"Line 3"}
                helperText={helperText}
                field1={field1}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
            <CustomeTextField
                field2={'postalCode'}
                type="number"
                placeholder={"Postal Code"}
                helperText={helperText}
                field1={field1}
                objectDetails={objectDetails}
                setObjectDetails={setObjectDetails}
            />
        </>
    )
}

export default Address;