import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.scss';
// import FormRoot from './form/FormRoot';
import MainPage from './pages/main';
import PartyAboutPage from './pages/parties';
import VoteLocationPage from './pages/voteWhere';

import { PAGES } from './constants/pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          
          <Route path={PAGES.ABOUT_PARTIES.path} element={<PartyAboutPage />} />
          
          <Route path={PAGES.WHERE.path} element={<VoteLocationPage />} />

          {/* <Route path={PAGES.ADVISOR.path} element */}

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
