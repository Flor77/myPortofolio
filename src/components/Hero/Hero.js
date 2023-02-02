import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Florin Buda Portofolio
      </SectionTitle>
      <SectionText>
        I love a good challenge and I think it is important to leave things
        better than how you found them.{" "}
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
