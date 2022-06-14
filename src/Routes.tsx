import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { config } from "./config";

import { Auth } from "~/components/Auth";
import { Layout } from "./Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TweetDetailPage from "./pages/TweetDetail";
import NotifyPage from "./pages/Notify";
import MessengerPage from "./pages/Messenger";
import ProfilePage from "./pages/Profile";
import ProfileTweetPage from "./pages/ProfileTweet";
import ProfileImagePage from "./pages/ProfileImage";
import ProfileSharePage from "./pages/ProfileShare";
import ProfileFlowerPage from "./pages/ProfileFlower";
import ProfileFriendPage from "./pages/ProfileFriend";

const Routes = () => {
  const user = true;
  return (
    <Switch>
      <Route
        path={config.route.HOME}
        element={
          user ? (
            <Layout />
          ) : (
            <Navigate to={`${config.route.AUTH}/${config.route.LOGIN}`} />
          )
        }
      >
        <Route index element={<HomePage />} />
        <Route path={config.route.NOTIFY} element={<NotifyPage />} />
        <Route path={config.route.MESSENGER} element={<MessengerPage />} />
        <Route path={config.route.PROFILE} element={<ProfilePage />}>
          <Route index element={<ProfileTweetPage />} />
          <Route path={config.route.SHARE_P} element={<ProfileSharePage />} />
          <Route path={config.route.IMAGE_P} element={<ProfileImagePage />} />
          <Route path={config.route.FLOWER_P} element={<ProfileFlowerPage />} />
          <Route path={config.route.FRIEND_P} element={<ProfileFriendPage />} />
        </Route>
      </Route>
      <Route path={config.route.TWEET} element={<TweetDetailPage />} />
      <Route path={config.route.AUTH} element={<Auth />}>
        <Route path={config.route.LOGIN} element={<LoginPage />} />
        <Route path={config.route.REGISTER} element={<RegisterPage />} />
      </Route>
    </Switch>
  );
};

export default Routes;
