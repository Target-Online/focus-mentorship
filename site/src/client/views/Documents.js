import React, { useContext, useEffect, useState } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
import Upload from "@material-ui/icons/CloudUpload";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

//import * as realTimedbApi from "../api/index.js";
import Layout from "../layouts/Layout";
import { CurrentUserContext, DocumentsContext } from "../root";
import documentPicker from "../shared/utils/documentPicker";
import Spinner from "../../shared/components/spinner/spinner";
import EditDocument from './Edit';

const useStyles = makeStyles(styles);

export const Documents = props => {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [documents, dispatch] = useContext(DocumentsContext);
  const [currentuser] = useContext(CurrentUserContext);
  const data = documents.data.filter(
    d => d.parentId == localStorage.getItem("subFolderId")
  );
  const classes = useStyles();

  const [editDocument, setEditDocument] = useState({});
  const [documentName, setDocumentName] = React.useState("");

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!currentuser && !documents.inProgress) props.history.push("/");
  }, []);

  const onEditDocument = document => {
    setDocumentName(document.name)
    setEditDocument(document);
    setEditModalVisible(true);
  }

  return (
    <Spinner isLoading={documents.inProgress}>
      <Layout>
        <GridContainer justify="center">
          <CardIcon
            color="info"
            onClick={() =>
              currentuser.isAdmin && documentPicker(localStorage.getItem("subFolderId"), dispatch)
            }
          >
            <Upload />
          </CardIcon>
        </GridContainer>
        <GridContainer>
          {data
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((document, key) => (
              <GridItem
                key={key}
                xs={12}
                sm={6}
                md={3}
                onClick={() => (window.location.href = document.url)}
              >
                <Card>
                  <CardHeader color="info" stats icon>
                    <CardIcon onClick={event => {
                      if(currentuser.isAdmin) {
                        event.stopPropagation();
                        onEditDocument(document);
                      }
                    }} color="info">
                      <PictureAsPdf />
                    </CardIcon>
                    <p className={classes.cardCategory}>{document.name}</p>
                  </CardHeader>
                  <CardFooter stats />
                </Card>
              </GridItem>
            ))}
        </GridContainer>
        <EditDocument 
          documentName={documentName}
          setDocumentName={setDocumentName}
          document={editDocument} 
          setVisible={setEditModalVisible} 
          isVisible={isEditModalVisible} 
        />
      </Layout>
    </Spinner>
  );
};

export default Documents;
