import { ReactElement, ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { BsGithub, BsTwitter } from "react-icons/bs";

const ICON_SIZE = 30;

interface ISocials {
  label: string;
  link: string;
  icon: ReactNode;
}

export const socials: ISocials[] = [
  {
    label: "eth-dash",
    link: "https://github.com/mfbevan/eth-dash",
    icon: <BsGithub size={ICON_SIZE} />,
  },
  {
    label: "@mfbevan",
    link: "https://twitter.com/mfbevan",
    icon: <BsTwitter size={ICON_SIZE} />,
  },
];
