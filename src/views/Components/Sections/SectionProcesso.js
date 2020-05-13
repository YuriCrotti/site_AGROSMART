import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import {Launch, Mood, School, StayCurrentPortrait, Wifi} from "@material-ui/icons";

const useStyles = makeStyles(styles);



export default function SectionProcesso() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Conheça nossas soluções</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>
                <small></small>
              </h3>
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabName: "Atmosfera Controlada Estática",
                    tabIcon: StayCurrentPortrait,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Nesse tipo de solução é possível controlar e monitorar câmaras de armazenamento de frutas de forma estática. 
                        Os valores de O2 e CO2 são ajustados de acordo com necessidade do usuário. 
                        Neste sistema o usuário poderá monitorar em seu computador ou smartfone tudo o que acontece em cada umas das câmaras de armazenamento. 
                        Composta por uma inteligência artificial a solução traz ao usuário um menor custo em insumos e um maior tempo de armazenamento.
                      </p>
                    )
                  },
                  {
                    tabName: "Atmosfera Controlada Dinâmica",
                    tabIcon: Wifi,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Nesse sistema é possível controlar e monitorar câmaras de armazenamento de frutas de forma dinâmica. 
                        Os valores de O2 e CO2 são ajustados de acordo com quociente de respiração da fruta (QR). 
                        Um sistema que faz uso de inteligência artificial detecta o estresse respiratorio e ajusta de forma automatica os valores de O2 e CO2. 
                        Nesta solução o usuário poderá monitorar em seu computador ou smartfone tudo o que acontece em cada umas das câmaras de armazenamento. 
                        Composta por uma inteligência artificial a solução traz ao usuário um menor custo em insumos e um maior tempo de armazenamento.
                      </p>
                    )
                  },
                
                ]}
              />
            </GridItem>

          </GridContainer>
        </div>
      </div>
    </div>
  );
}
