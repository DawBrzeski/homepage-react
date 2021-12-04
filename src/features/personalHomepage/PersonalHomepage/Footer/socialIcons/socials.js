import { styleIcon } from "./styled";

import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/DawBrzeski",
        Icon: styleIcon(GitHubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/daw.brzeski",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dawid-brzeski-321016227/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/xaxa.bu/",
        Icon: styleIcon(InstagramIcon),
    },


];