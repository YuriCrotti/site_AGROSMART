import React from "react";
// plugin that creates slider

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";



const useStyles = makeStyles(styles);

export default function SectionBasics(props) {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{paddingTop: '50px'}}>
      <GridContainer className={classes.textCenter}>
        <GridItem xs={12} sm={12} md={12}>
          <h2>Armazenamento pós-colheita de frutas com inteligência</h2>
          <h4>
            Armazenamento pós-colheita de frutas com inteligência. Utilizando de métodos de armazenamento por atmosfera controlada você poderá encontrar soluções baseadas em atmosfera estática e atmosfera dinâmica.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Button
            color="success"
            size="lg"
            href="/sobre"
          >
            Saiba Mais
          </Button>
        </GridItem>
      </GridContainer>
    <br />
    <br />
    <br />
    </div>

  );
}
