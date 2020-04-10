import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import TwoDControlSelect from 'shared/components/dimensional-form-control-select/2D-form-control-select';
import ThreeDControlSelect from 'shared/components/dimensional-form-control-select/3D-form-control-select';
import TwoDTextField from 'shared/components/dimensional-text-fields/2D-text-field';
import ThreeDTextField from 'shared/components/dimensional-text-fields/3D-text-field';
import Signature from 'shared/components/signature';

const highSchoolSeniorCertificates = [
    "",
    "Full Exeption",
    "Ordinary Conditional Exemption Mature",
    "Age Conditional Exemption",
    "Grade 11 final",
    "Grade 11 mid-final",
    "Grade 12 final",
    "Previous Qualification",
    "Recognition of Prior Learning (RPL)"
]

const AcademicHistory = ({
    declarationDetails,
    setDeclarationDetails
}) => {
    const classes = useStyles();

    /*

    const [declarationDetails, setDeclarationDetails] = useState({
    applicantDeclaration: {
      fullName: '',
      IdorPassportNumber: '',
      applicantSignature:{
        signatureInitials: '',
        date: ''
      },
      witnessSignature:{
        signatureInitials: '',
        date: ''
      },
      parentOrGuardianDetailsSignature:{
        signatureInitials: '',
        date: ''
      }
    },
    benifactorDeclaration:{
        fullName: '',
        idNumber: '',
      signature:{
        signatureInitials: '',
        date: ''
      }
    }
  })


    */
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <TwoDTextField
                        type="text"
                        field1={'applicantDeclaration'}
                        field2={'fullName'}
                        placeholder={"I, (fullName)"}
                        helperText={'Applicant Declaration'}
                        objectDetails={declarationDetails}
                        setObjectDetails={setDeclarationDetails}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <TwoDTextField
                        type="number"
                        field1={'applicantDeclaration'}
                        field2={'IdorPassportNumber'}
                        placeholder={"ID / Passport number"}
                        helperText={'Applicant Declaration'}
                        objectDetails={declarationDetails}
                        setObjectDetails={setDeclarationDetails}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <label className={'align-text-center'}>
                        the undersigned, declare that all the particulars supplied by me in this form are true,
                        complete and correct. I accept that incorrect or
                        misleading information could lead to the cancellation of this application.
                    </label>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'applicantSignature'}
                            placeholder={"Applicant Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'witnessSignature'}
                            placeholder={"Witness Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'applicantDeclaration'}
                            field2={'parentOrGuardianDetailsSignature'}
                            placeholder={"Parent / Guardian Signature Initials"}
                            helperText={'Applicant Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <label className={'align-text-center'}>
                        This section must be completed by the benefactor,
                        i.e. the person who will be responsible for the payment of all tuition fees.
                    </label>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <TwoDTextField
                        type="text"
                        field1={'benifactorDeclaration'}
                        field2={'fullName'}
                        placeholder={"I, (fullName)"}
                        helperText={'Benifactor Declaration'}
                        objectDetails={declarationDetails}
                        setObjectDetails={setDeclarationDetails}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <label className={'align-text-center'}>
                        the undersigned, hereby acknowledge myself to be jointly and
                        separately responsible for monies, which the above mentioned 
                        applicant may at any stage be owing to FFSA (Pty) Ltd in terms
                        of the agreement that he/she concluded with FFSA (Pty) Ltd, as 
                        set out above, including any change thereto.
                    </label>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Signature
                            field1={'benifactorDeclaration'}
                            field2={'signature'}
                            placeholder={"Benifactor Signature Initials"}
                            helperText={'Benifactor Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TwoDTextField
                            type="number"
                            field1={'benifactorDeclaration'}
                            field2={'idNumber'}
                            placeholder={"ID Number"}
                            helperText={'Benifactor Declaration'}
                            objectDetails={declarationDetails}
                            setObjectDetails={setDeclarationDetails}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default AcademicHistory;