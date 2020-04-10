import React, { useContext, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/PictureAsPdf";
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

const useStyles = makeStyles(styles);

export const Documents = props => {
  const [documents, dispatch] = useContext(DocumentsContext);
  const [currentuser] = useContext(CurrentUserContext);
  const data = documents.data.filter(
    d => d.parentId == localStorage.getItem("subFolderId")
  );
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (!currentuser && !documents.inProgress) props.history.push("/");
  }, []);

  return (
    <Spinner isLoading={documents.inProgress}>
      <Layout>
        <GridContainer justify="center">
          <CardIcon
            color="info"
            onClick={() =>
              documentPicker(localStorage.getItem("subFolderId"), dispatch)
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
                    <CardIcon color="info">
                      <Store />
                    </CardIcon>
                    <p className={classes.cardCategory}>{document.name}</p>
                  </CardHeader>
                  <CardFooter stats />
                </Card>
              </GridItem>
            ))}
        </GridContainer>
      </Layout>
    </Spinner>
  );
};

export default Documents;
