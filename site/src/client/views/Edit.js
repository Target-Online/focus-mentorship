import React, { useEffect } from "react";
import { toast } from "react-toastify";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import { updateData, remove } from "client/api/index.js";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function EditDocument({
    documentName,
    setDocumentName,
    document,
    isVisible,
    setVisible
}) {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={isVisible}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setVisible(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => setVisible(false)}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Edit Document</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
          <CustomInput
            value={documentName}
            onChangeValue={value => setDocumentName(value)}
            formControlProps={{
                fullWidth: true
            }}
            inputProps={{ type: "text" }}
            />
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
                onClick={() => {
                  remove("documents", document.id);
                  toast.success("Deleted successfully.");
                  setVisible(false);
                }}
                color="danger"
                simple
            >
              Delete
            </Button>
            <Button
                onClick={() => {
                    updateData("documents", document.id, { name: documentName });
                    toast.success("Renamed successfully.");
                    setVisible(false);
                }}
                color="success"
                simple
            >
              Rename
            </Button>
          </DialogActions>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
}