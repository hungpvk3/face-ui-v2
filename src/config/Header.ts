import { config } from ".";
import { icons } from "../icons";
import { route } from "./Routes";

export const header = [
  {
    tippy: "Home",
    icon: icons.home,
    iconActive: icons.homeActive,
    to: route.HOME,
    path: "",
  },
  {
    tippy: "Tìm kiếm",
    icon: icons.searchNavigate,
    iconActive: icons.searchActive,
    to: route.SEARCH,
    path: route.SEARCH,
  },
  {
    tippy: "Notify",
    icon: icons.notify,
    iconActive: icons.notifyActive,
    to: route.NOTIFY,
    path: route.NOTIFY,
  },
  {
    tippy: "Chat",
    icon: icons.mail,
    iconActive: icons.mailActive,
    to: `${route.MESSENGER}/id`,
    path: route.MESSENGER,
  },
  {
    tippy: "Profile",
    icon: icons.profile,
    iconActive: icons.profileActive,
    to: route.PROFILE,
    path: route.PROFILE,
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

export const subnavFrofile = [
  {
    path: "friends",
    title: "Friends",
    route: config.route.FRIEND_P,
  },
  {
    path: "followers",
    title: "Followers",
    route: config.route.FLOWER_P,
  },
];

export const subnavNotify = [
  {
    path: undefined,
    title: "Tất cả thông báo",
    route: "",
  },
  {
    path: "request-friends",
    title: "Lời mời kết bạn",
    route: config.route.NOTIFY_FRIEND,
  },
];
