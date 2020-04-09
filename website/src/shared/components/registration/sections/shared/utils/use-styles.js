import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none'
    },
    formControl: {
        margin: theme.spacing(0.5),
        flexWrap: 'wrap',
        display: 'flex'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default useStyles;