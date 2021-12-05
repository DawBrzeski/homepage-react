import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { nextSkills, skills } from "./skillData";
import { Container, Icon } from "./styled";
import RocketIcon  from "./rocket.png";
import ToolsIcon  from "./tools.png";



export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />

        <main>
            <Skills
                title={(
                    <>
                        My skillset includes <Icon src={ToolsIcon} alt="" />
                    </>
                )}
                skills={skills}
            />
            <Skills
                title={(
                    <>
                        What I want to learn next <Icon src={RocketIcon} alt="" />
                    </>
                )}
                skills={nextSkills}
            />
             <Portfolio />
        </main>
        <Footer />
    </Container>

);