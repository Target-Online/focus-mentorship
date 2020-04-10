import React, { useContext, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/FolderOpenTwoTone";
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
import { SubFoldersContext, CurrentUserContext } from "../root";

const useStyles = makeStyles(styles);

export const Dashboard = props => {
  const [subFolders] = useContext(SubFoldersContext);
  const [currentuser] = useContext(CurrentUserContext);
  const data = subFolders.data.filter(
    sf => sf.parentId == localStorage.getItem("folderId")
  );

  const classes = useStyles();

  useEffect(() => {
    if (!currentuser && !subFolders.inProgress) props.history.push("/");
  }, []);

  const switchScreen = data => {
    localStorage.setItem("subFolderId", data.id);
    // eslint-disable-next-line react/prop-types
    props.history.push("/documents");
  };

  return (
    <Spinner isLoading={subFolders.inProgress}>
      <Layout>
        <GridContainer>
          {data
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
                  <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                      <Store />
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
