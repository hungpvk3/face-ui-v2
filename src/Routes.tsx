import { useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { config } from "./config";

import { Auth } from "~/components/Auth";
import { Layout } from "./Layout";
import { UserCtx } from "./store/UserStore";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import OtpPage from "./pages/Otp";
import TweetDetailPage from "./pages/TweetDetail";
import SearchPage from "./pages/Search";
import NotifyPage from "./pages/Notify";
import NotifyAllPage from "./pages/NotifyAll";
import NotifyRequestFriendPage from "./pages/NotifyRequestFriend";
import MessengerPage from "./pages/Messenger";
import MessengerInfo from "./pages/MessengerInfo";
import ChatBoxPage from "./pages/ChatBox";
import ProfilePage from "./pages/Profile";
import ProfileTweetPage from "./pages/ProfileTweet";
import ProfileImagePage from "./pages/ProfileImage";
import ProfileSharePage from "./pages/ProfileShare";
import ProfileFlowerPage from "./pages/ProfileFlower";
import ProfileFriendPage from "./pages/ProfileFriend";

const Routes = () => {
  const { isAuthenticated } = useContext(UserCtx);

  return (
    <Switch>
      <Route
        path={config.route.HOME}
        element={
          isAuthenticated ? (
            <Layout />
          ) : (
            <Navigate to={`${config.route.AUTH}/${config.route.LOGIN}`} />
          )
        }
      >
        <Route index element={<HomePage />} />
        <Route path={config.route.NOTIFY} element={<NotifyPage />}>
          <Route index element={<NotifyAllPage />} />
          <Route
            path={config.route.NOTIFY_FRIEND}
            element={<NotifyRequestFriendPage />}
          />
        </Route>
        <Route path={`${config.route.MESSENGER}`} element={<MessengerPage />}>
          <Route path=":id" element={<ChatBoxPage />} />
          <Route
            path={`:id/${config.route.MESSENGER_INFO}`}
            element={<MessengerInfo />}
          />
        </Route>
        <Route path={config.route.PROFILE} element={<ProfilePage />}>
          <Route index element={<ProfileTweetPage />} />
          <Route path={config.route.SHARE_P} element={<ProfileSharePage />} />
          <Route path={config.route.IMAGE_P} element={<ProfileImagePage />} />
          <Route path={config.route.FLOWER_P} element={<ProfileFlowerPage />} />
          <Route path={config.route.FRIEND_P} element={<ProfileFriendPage />} />
        </Route>
        <Route path={config.route.SEARCH} element={<SearchPage />} />
      </Route>
      <Route path={config.route.TWEET} element={<TweetDetailPage />} />
      <Route path={config.route.AUTH} element={<Auth />}>
        <Route path={config.route.LOGIN} element={<LoginPage />} />
        <Route path={config.route.REGISTER} element={<RegisterPage />} />
        <Route path={config.route.OTP} element={<OtpPage />} />
      </Route>
    </Switch>
  );
};

export default Routes;
