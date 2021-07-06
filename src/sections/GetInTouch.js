import { Section } from "../components/UI/Section"
import { SectionTitle } from "../components/UI/SectionTitle"
import { SectionSubtitle } from "../components/UI/SectionSubtitle"
import { LinkButton } from "../components/UI/LinkButton"

export const GetInTouch = () => {
  return (
    <Section dark>
      <SectionTitle text="Do you have an idea?" />
      <SectionSubtitle dark text="Let's talk about!" />
      <LinkButton headerBtn label="Get in touch" to="Contacts" />
    </Section>
  )
}