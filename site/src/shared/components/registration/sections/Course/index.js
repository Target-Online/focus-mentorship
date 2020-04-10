import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from '../shared/utils/use-styles';
import FormControlSelect from 'shared/components/dimensional-form-control-select/1D-form-control-select';

const courses = [
    "",
    "Clothing Design Development, Entrepreneurship & Retail",
    "Clothing Technology And Entrepreneurship - Full Time Course",
    "Applied Design Short Course",
    "Basic Pattern Skills And Design Short Course",
    "Advanced Pattern Skills And Design Short Course",
    "Basic Garment Construction And Technology Short Course",
    "Advanced Basic Garment Construction And Technology Short Course",
    "Bridal Pattern Technology Short Course",
    "Bridal Garment Construction And Technology Short Course"
]

const Course = ({
    course,
    setCourse
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <FormControlSelect
                    field={'Id'}
                    fieldName={'Name'}
                    label={"Select course"}
                    index={true}
                    options={courses}
                    classes={classes}
                    objectDetails={course}
                    setObjectDetails={setCourse}
                />
            </Grid>
        </div>
    );
}

export default Course;