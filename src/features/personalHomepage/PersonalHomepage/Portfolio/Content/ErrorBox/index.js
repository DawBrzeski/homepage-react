import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import {ReactComponent as WarningIcon} from "./warrning.svg";
import { Header, Paragraph, Wrapper } from "./styled";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header> Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">Go to Github</ButtonLink>
    </Wrapper>

);