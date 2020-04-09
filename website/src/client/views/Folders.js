import React, { useContext, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Folder from "@material-ui/icons/Folder";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Spinner from "../../shared/components/spinner/spinner";

import Layout from "../layouts/Layout";
import { FoldersContext, CurrentUserContext } from "../root";

const useStyles = makeStyles(styles);

export const Dashboard = props => {
  const [folders] = useContext(FoldersContext);
  const [currentuser] = useContext(CurrentUserContext);
  const classes = useStyles();

  useEffect(() => {
    if (!currentuser && !folders.inProgress) props.history.push("/");
  }, []);

  const switchScreen = data => {
    localStorage.setItem("folderId", data.id);
    // eslint-disable-next-line react/prop-types
    props.history.push("/subFolders");
  };

  return (
    <Spinner isLoading={folders.inProgress}>
      <Layout>
        <GridContainer>
          {folders.data
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((folder, key) => (
              <GridItem
                key={key}
                xs={12}
                sm={6}
                md={3}
                onClick={() => switchScreen(folder)}
              >
                <Card>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Folder />
                    </CardIcon>
                    <p className={classes.cardCategory}>{folder.name}</p>
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

export default Dashboard;
