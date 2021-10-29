import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav/SiteNav";
import CoverPage from "./Components/Pages/CoverPage/CoverPage";
import ProblemPage from "./Components/Pages/ProblemPage/ProblemPage";
import SolutionPage from "./Components/Pages/SolutionPage/SolutionPage";
import NewWorldPage from "./Components/Pages/NewWorldPage/NewWorldPage";
import ProblemDataPage from "./Components/Pages/ProblemDataPage/ProblemDataPage";
import SolutionDataPage from "./Components/Pages/SolutionDataPage/SolutionDataPage";
import WhatToDoPage from "./Components/Pages/WhatToDoPage/WhatToDoPage";
import ReferencesPage from "./Components/Pages/ReferencesPage/ReferencesPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";
import AdminLoginPage from "./Components/Pages/AdminLoginPage/AdminLoginPage";
import AdminDashboardPage from "./Components/Pages/AdminDashboardPage/AdminDashboardPage";

function App() {
    return (
        <Router>
            <SiteNav />
            <Switch>
                <Route exact path="/" component={CoverPage} />
                <Route exact path="/admin-login" component={AdminLoginPage} />
                <Route exact path="/admin-dashboard" component={AdminDashboardPage} />
                <Route path="/problem" component={ProblemPage} />
                <Route path="/problem-data" component={ProblemDataPage} />
                <Route path="/solution" component={SolutionPage} />
                <Route path="/solution-data" component={SolutionDataPage} />
                <Route path="/new-world" component={NewWorldPage} />
                <Route path="/what-to-do" component={WhatToDoPage} />
                <Route path="/references" component={ReferencesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
        </Router>
    )
}

export default App;
