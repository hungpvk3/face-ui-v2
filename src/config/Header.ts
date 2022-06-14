import { icons } from "../icons";
import { route } from "./Routes";

export const header = [
  {
    tippy: "Home",
    icon: icons.home,
    iconActive: icons.homeActive,
    to: route.HOME,
  },
  {
    tippy: "Notify",
    icon: icons.notify,
    iconActive: icons.notifyActive,
    to: route.NOTIFY,
  },
  {
    tippy: "Chat",
    icon: icons.mail,
    iconActive: icons.mailActive,
    to: route.MESSENGER,
  },
  {
    tippy: "Profile",
    icon: icons.profile,
    iconActive: icons.profileActive,
    to: route.PROFILE,
  },
];

export const headerProfile = [
  {
    title: "Bài viết",
    to: route.TWEET_P,
    active: undefined,
  },
  {
    title: "Chia sẻ",
    to: route.SHARE_P,
    active: "share",
  },
  {
    title: "Ảnh",
    to: route.IMAGE_P,
    active: "image",
  },
];
