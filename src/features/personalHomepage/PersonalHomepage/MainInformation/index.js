import { email } from "../email";
import dawBrzeskiProfile from "./profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon, } from "./styled"
import faceIcon from "./faceIcon.png";
import computerIcon from "./computerIcon.png";

export const MainInformation = () => (

    <Wrapper>
        <Avatar src={dawBrzeskiProfile} alt="Dawid Brzeski" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dawid Brzeski</Name>
            <Summary>
                <Icon src={faceIcon} alt="" />
                <Icon src={computerIcon} alt="" />
                I'm passionate Frontend Developer in love with React, currently looking for new job oppourtinutes.
            </Summary>
            <StyledButtonLink alt="Hire me" href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);