import React from "react";
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Muted from "components/Typography/Muted.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";


const useStyles = makeStyles(styles);

export default function WhoSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{paddingTop: '50px'}}>
      <GridContainer className={classes.textCenter}>
        <GridItem xs={12} sm={12} md={12}>
          <h2 style={{color: 'black'}}>Quem Somos?</h2>
          <Muted><h4>
            Somos um grupo de doutores, mestres e engenheiros da área agrícola e tecnológica. 
            Com uma equipe especialista em armazenamento de frutas e desenvolvimento sistemas embarcados inteligentes.
            Oferemos  soluções para empresas e produtores, unindo o que tem de melhor em tecnologia e método de armazenamento para frutas.    
          </h4></Muted>
        </GridItem>
      </GridContainer>
      <br/>
      <br/>
    </div>

  );
}
