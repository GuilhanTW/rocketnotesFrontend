import { Fragment } from "react";
import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";


export function Details () {
  return(
    <Fragment>
      <Container>
        <Header/>

        <main>
          <Content>
            <ButtonText title="Excluir nota"/>

            <h1>Introdução ao React</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore voluptate. Totam eveniet at ea nihil nisi labore voluptas eos, amet fugiat asperiores porro aspernatur consequatur repellendus ipsa delectus omnis?</p>

            <Section title="Links úteis">
              <Links>
                <li><a href="#">https://www.rockeatseat.com.br/</a></li>
                <li><a href="#">https://www.rockeatseat.com.br/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express"/>
              <Tag title="Node js"/>
            </Section>

            <Button title="Voltar"/>
          </Content>
        </main>
      </Container>
    </Fragment>
  ); 
}