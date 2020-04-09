import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import TwoDControlSelect from 'shared/components/dimensional-form-control-select/2D-form-control-select';
import ThreeDControlSelect from 'shared/components/dimensional-form-control-select/3D-form-control-select';
import TwoDTextField from 'shared/components/dimensional-text-fields/2D-text-field';
import ThreeDTextField from 'shared/components/dimensional-text-fields/3D-text-field';

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
    academicHistory,
    setAcademicHistory
}) => {
    const classes = useStyles();
 
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TwoDTextField
                            type="text"
                            field1={'highSchoolRecord'}
                            field2={'lastHighSchoolAttended'}
                            value={academicHistory.highSchoolRecord.lastHighSchoolAttended}
                            placeholder={"Last High School Attended"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <TwoDTextField
                            type="number"
                            field1={'highSchoolRecord'}
                            field2={'year'}
                            placeholder={"Year"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <TwoDTextField
                            type="text"
                            field1={'highSchoolRecord'}
                            field2={'country'}
                            placeholder={"Country"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <TwoDTextField
                            type="number"
                            field1={'highSchoolRecord'}
                            field2={'aggregate'}
                            placeholder={"Aggregate"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <TwoDControlSelect
                            field1={'highSchoolRecord'}
                            field2={'highSchoolSeniorCertificateId'}
                            fieldName={'highSchoolSeniorCertificate'}
                            label={"High School Senior Certificate"}
                            options={highSchoolSeniorCertificates}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear1Record'}
                            field3={'qualificationDescription'}
                            helperText={'Tertiary Record'}
                            placeholder={"Qualification Description"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear1Record'}
                            field3={'institution'}
                            helperText={'Tertiary Record'}
                            placeholder={"Institution"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear1Record'}
                            field3={'totalCredits'}
                            helperText={'Tertiary Record'}
                            placeholder={"Total Credits"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear1Record'}
                            field3={'yearsOfStudy'}
                            helperText={'Tertiary Record'}
                            placeholder={"Year(s) of study"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
    
                        <ThreeDControlSelect
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear1Record'}
                            field3={'completedId'}
                            fieldName={'completed'}
                            label={"Completed ?"}
                            options={["", "Yes", "No"]}
                            index={true}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear2Record'}
                            field3={'qualificationDescription'}
                            helperText={'Tertiary Record'}
                            placeholder={"Qualification Description"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear2Record'}
                            field3={'institution'}
                            helperText={'Tertiary Record'}
                            placeholder={"Institution"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear2Record'}
                            field3={'totalCredits'}
                            helperText={'Tertiary Record'}
                            placeholder={"Total Credits"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear2Record'}
                            field3={'yearsOfStudy'}
                            helperText={'Tertiary Record'}
                            placeholder={"Year(s) of study"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
    
                        <ThreeDControlSelect
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear2Record'}
                            field3={'completedId'}
                            fieldName={'completed'}
                            label={"Completed ?"}
                            options={["", "Yes", "No"]}
                            index={true}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear3Record'}
                            field3={'qualificationDescription'}
                            helperText={'Tertiary Record'}
                            placeholder={"Qualification Description"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear3Record'}
                            field3={'institution'}
                            helperText={'Tertiary Record'}
                            placeholder={"Institution"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear3Record'}
                            field3={'totalCredits'}
                            helperText={'Tertiary Record'}
                            placeholder={"Total Credits"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                        <ThreeDTextField
                            type="text"
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear3Record'}
                            field3={'yearsOfStudy'}
                            helperText={'Tertiary Record'}
                            placeholder={"Year(s) of study"}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
    
                        <ThreeDControlSelect
                            field1={'tertiaryStudyRecord'}
                            field2={'tertiaryYear3Record'}
                            field3={'completedId'}
                            fieldName={'completed'}
                            label={"Completed ?"}
                            options={["", "Yes", "No"]}
                            index={true}
                            classes={classes}
                            objectDetails={academicHistory}
                            setObjectDetails={setAcademicHistory}
                        />
                    </Paper>
                </Grid>
                {/*
                <Grid item xs={12} sm={12} md={12} >
                    <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                saveStudentDetails(academicHistory)
                            }}
                        > Save
                        </Button>
                    </Paper>
                </Grid>
                */}
            </Grid>
        </div>
    );
}

export default AcademicHistory;