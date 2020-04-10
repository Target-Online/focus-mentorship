import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Address from 'shared/components/address/';
import useStyles from '../shared/utils/use-styles';
import FormControlSelect from 'shared/components/dimensional-form-control-select/1D-form-control-select';
import CustomTextField from 'shared/components/dimensional-text-fields/1D-text-field';

const StudentDetails = ({
    studentDetails,
    setStudentDetails
}) => {
    const classes = useStyles();
    const [extras, setExtras] = useState({
        race: ''
    })
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="text"
                            field={'surname'}
                            placeholder={"Surname"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'firstNames'}
                            placeholder={"First Names"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="number"
                            field={'idNumber'}
                            placeholder={"ID Number"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <FormControlSelect
                            field={'title'}
                            label={"Title"}
                            options={["","Miss", "Mr", "Mrs"]}
                            classes={classes}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        {extras.race != "Other" &&
                            <FormControlSelect
                                field={'race'}
                                label={"Race"}
                                options={["", "Black", "White", "Coloured", "Other"]}
                                classes={classes}
                                extras={extras}
                                setExtras={setExtras}
                                objectDetails={studentDetails}
                                setObjectDetails={setStudentDetails}
                            />
                        }
                        {extras.race == "Other" &&
                            <CustomTextField
                                type="text"
                                field={'otherRace'}
                                placeholder={"Please specify other race."}
                                helperText={"Required for statistical purposes by the DOE."}
                                objectDetails={studentDetails}
                                setObjectDetails={setStudentDetails}
                            />
                        }

                        <FormControlSelect
                            field={'gender'}
                            label={"Gender"}
                            options={["", "Male", "Female"]}
                            classes={classes}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address
                            helperText={'Student residential address (Street) for the duration.'}
                            field1={'residentialAddress'}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <Address
                            helperText={'Student postal address (Street) if different.'}
                            field1={'postalAddress'}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <CustomTextField
                            type="text"
                            field={'telWork'}
                            placeholder={"Tel (W)"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'telHome'}
                            placeholder={"Tel (H)"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'cell'}
                            placeholder={"Cell"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'fax'}
                            placeholder={"Fax"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                        <CustomTextField
                            type="text"
                            field={'email'}
                            placeholder={"Email"}
                            objectDetails={studentDetails}
                            setObjectDetails={setStudentDetails}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="disabilities/medical conditions" >Do you have disabilities / medical conditions</InputLabel>
                            <Select
                                native
                                autoWidth
                                labelWidth={2}
                                value={studentDetails.disabilitiesOrMedicalConditionAffectStudies}
                                onChange={event => setStudentDetails({
                                    ...studentDetails,
                                    disabilitiesOrMedicalConditionAffectStudies: event.target.value
                                })}
                            >
                                <option value={''} />
                                <option value={'Yes'}>Yes</option>
                                <option value={'No'}>No</option>

                            </Select>
                            {studentDetails.disabilitiesOrMedicalConditionAffectStudies == 'Yes' &&
                                <CustomTextField
                                    type="text"
                                    field={'natureOfDisabilityOrMedicalCondition'}
                                    placeholder={"Nature of the disability or condition"}
                                    helperText={"State the nature of the disability or condition"}
                                    objectDetails={studentDetails}
                                    setObjectDetails={setStudentDetails}
                                />
                            }
                        </FormControl>
                    </Paper>
                </Grid>
                {/*
                <Grid item xs={12} sm={12} md={12} >
                    <Paper className={classes.paper}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                saveStudentDetails(studentDetails)
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

export default StudentDetails;