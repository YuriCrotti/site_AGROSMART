import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InsertChart from "@material-ui/icons/InsertChart";
import TrackChanges from "@material-ui/icons/TrackChanges";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Armazenamento Controlado Inteligente</h2>
          <h5 className={classes.description}>
            Projetamos e desenvolvemos seu sistema controlado sob demanda. Armazene suas frutas após a colheita em um sistema totalmente controlado e monitorado de forma inteligente e eficiente.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Tempo de Armazenamento"
              description="Aumente o tempo de armazenamento de suas frutas mantendo a qualidade para seus clientes."
              icon={TrendingUp}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Projetos Sob Demanda"
              description="Não importa o tamanho do seu projeto, nossa solução é totalmente escalonável. Nossas soluções podem ser aplicadas também transportes de frutas, como containers e caminhões."
              icon={InsertChart}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Solução Completa"
              description="Trabalhamos com as melhores tecnologias disponíveis. Inteligência artificial e aprendizado de maquina fazem com o que o sistema seja capaz de diminuir os custos e permitem que o tempo de armazenamento das frutas seja prologado."
              icon={TrackChanges}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
