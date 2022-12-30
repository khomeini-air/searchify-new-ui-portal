import React, { useEffect, useState } from "react";
import {  Route, Switch } from "react-router-dom";
import Signin from "./pages/users/Signin";
import Signup from "./pages/users/Signup";
import "./styles/default/style.css";
import "./styles/default/style.1.css";
import "./styles/users/style.css";
import "./styles/admin/style.css";
import ResetPassword from "./pages/users/ResetPassword";
import History from "./pages/users/History";
import Shopify_Header from "./pages/users/Shopify_Header";
import Homepage from "./pages/users/Homepage";
import Shopify_Mywork from "./pages/users/Shopify_Mywork";
import ShopifySuggestionPage from "./pages/users/ShopifySuggestionPage";
import SuggestionPage from "./pages/users/SuggestionPage";
import TaggingPage from "./pages/users/TaggingPage";
import WebsiteHomePage from "./pages/users/WebsiteHomePage";
import SuggestionsMgmt from './pages/admin/SuggestionsMgmt';
import Suggestions_Import from './pages/admin/Suggestions_Import';
import Suggestions_List from './pages/admin/Suggestions_List';
import TagMgmt from "./pages/admin/TagMgmt";
import NewHome from "./pages/users/NewHome";
import UserHome from "./pages/users/UserHome";
import SeoProduct from "./pages/users/SeoProduct";
import Sidebar from "./pages/users/Sidebar";
import UserSettings from "./pages/users/UserSettings";
import UserDashboard from "./pages/users/UserDashboard";
//user/shopify/suggestions
//user/websiteseo/suggestions
const App = () => {
  const [getFromHome, setGetFromHome] = useState("");
  const [getFromShopifyHome, setGetFromShopifyHome] = useState("");
  const [getFromTag, setGetFromTag] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [data, setData] = useState(false)
  const [data1, setData1] = useState(false)

  useEffect(()=>{
    setData1(!data1);
  },[])

  useEffect(() => {
    setData(!data);
  }, [getFromHome, getFromShopifyHome, getFromTag, selectedTag, data1])
  return (
    <>
      <Switch>
        <Route exact path="/user/websiteseo/history">
          <History />
        </Route>
        <Route exact path="/user/websiteseo/suggestions">
          <SuggestionPage
            getFromHome={getFromHome} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>

        <Route exact path="/user/shopify-header">
          <Shopify_Header
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        <Route exact path="/user/home">
          <Homepage
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        <Route exact path="/user/shopify/shopify-mywork">
          <Shopify_Mywork
            setGetFromShopifyHome={setGetFromShopifyHome} //Send data to suggestion page
          />
        </Route>
        <Route exact path="/user/shopify/suggestions">
          <ShopifySuggestionPage
            getFromShopifyHome={getFromShopifyHome} //Send data to suggestion page
          />
        </Route>
        <Route exact path="/user/tagging">
          <TaggingPage
            getFromHome={getFromHome} //send data to tagging page
            setGetFromTag={setGetFromTag} //Fetch data from tagging page
            setSelectedTag={setSelectedTag} //Fetch Selected tag from tagging page
          />
        </Route>
        <Route exact path="/user/websiteseo">
          <WebsiteHomePage
            setGetFromHome={setGetFromHome} //For fetch data from Home page
          />
        </Route>
        {/* new route for userside start */}
        <Route exact path="/sidebar">
          <Sidebar
            setGetFromHome={setGetFromHome}
          />
        </Route>
        <Route exact path="/newhome">
          <NewHome
            setGetFromHome={setGetFromHome}
            data={data}
          />
        </Route>
          <Route exact path="/userhome">
          <UserHome
            setGetFromHome={setGetFromHome}
            data={data}
          />
        </Route>
        <Route exact path="/seoproduct">
          <SeoProduct
            setGetFromHome={setGetFromHome}
          />
        </Route>
        <Route exact path="/dashboard">
          <UserDashboard
            setGetFromHome={setGetFromHome}
          />
        </Route>
        <Route exact path="/usersettings">
          <UserSettings
            setGetFromHome={setGetFromHome}
          />
        </Route>
        {/* new route for userside end */}
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Signin
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        {/* admin route */}
        <Route exact path="/admin/tagmgmt">
          <TagMgmt
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        <Route exact path="/admin/suggestionsmgmt">
          <SuggestionsMgmt
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        <Route exact path="/admin/suggestions-list">
          <Suggestions_List
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
        <Route exact path="/admin/import-suggestions">
          <Suggestions_Import
            getFromTag={getFromTag} //Send data to suggestion page
            selectedTag={selectedTag} //Send selected tag to suggestion page
          />
        </Route>
      </Switch>
    </>
  );
};

export default App;
