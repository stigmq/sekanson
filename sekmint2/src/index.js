import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import OK01New1PageForWelcomeHome from './views/o-k-01-new-1-page-for-welcome-home'
import PRIVACYPAGE from './views/p-r-i-v-a-c-y-p-a-g-e'
import OK02NewRewardsPAGEFORPRONLY1 from './views/o-k-02-new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1'
import OK04MINTPAGEREFERRAL1 from './views/o-k-04-m-i-n-t-p-a-g-e-r-e-f-e-r-r-a-l1'
import No from './views/no'
import OK06NEW12Home from './views/o-k-06-n-e-w-1-2-home'
import LINKEDLICENSEPAGE from './views/l-i-n-k-e-d-l-i-c-e-n-s-e-p-a-g-e'
import OK05New1PageTRYME from './views/o-k-05-new-1-page-t-r-y-m-e'
import RewardsPAGEFORNormalUSER from './views/rewards-p-a-g-e-f-o-r-normal-u-s-e-r'
import YOUARENOTAPR from './views/y-o-u-a-r-e-n-o-t-a-p-r'
import TermConditions from './views/term-conditions'
import NFTPURCHASEAGREEMENT from './views/n-f-t-p-u-r-c-h-a-s-e-a-g-r-e-e-m-e-n-t'
import OK03NewRewardsPAGEFORNOPR from './views/o-k-03-new-rewards-p-a-g-e-f-o-r-n-o-p-r'

const App = () => {
  return (
    <Router>
      <div>


        <Route //HOME
          component={OK01New1PageForWelcomeHome}
          exact
          path="/"
        />


        <Route // USEFUL PAGE NEED BUTTON
          component={PRIVACYPAGE}
          exact path="/p-r-i-v-a-c-y-p-a-g-e"
          />


        <Route
          component={OK02NewRewardsPAGEFORPRONLY1} // USEFUL PAGE NEED BUTTON
          exact
          path="/o-k-02-new-rewards-p-a-g-e-f-o-r-p-r-o-n-l-y1"
        />


        <Route
          component={OK04MINTPAGEREFERRAL1} // MINT PAGE
          exact
          path="/o-k-04-m-i-n-t-p-a-g-e-r-e-f-e-r-r-a-l1"
        />


        <Route   ///2 PAGE
        component={OK06NEW12Home}
        exact path= "/o-k-06-n-e-w-1-2-home"
        />


        <Route // USEFUL PAGE NEED BUTTON
          component={LINKEDLICENSEPAGE}
          exact
          path="/l-i-n-k-e-d-l-i-c-e-n-s-e-p-a-g-e"
        />


        <Route
          component={OK05New1PageTRYME} // USEFUL PAGE NEED BUTTON
          exact
          path="/o-k-05-new-1-page-t-r-y-m-e"
        />


        <Route // USEFUL PAGE NEED BUTTON

          component={YOUARENOTAPR}
          exact
           path="/y-o-u-a-r-e-n-o-t-a-p-r"

          />

        <Route   // USEFUL PAGE NEED BUTTON

          component={TermConditions}
          exact
          path="/term-conditions"

          />


        <Route // USEFUL PAGE NEED BUTTON
          component={NFTPURCHASEAGREEMENT}
          exact
          path="/n-f-t-p-u-r-c-h-a-s-e-a-g-r-e-e-m-e-n-t"
        />

        <Route  // USEFUL PAGE NEED BUTTON
          component={OK03NewRewardsPAGEFORNOPR}
          exact
          path="/o-k-03-new-rewards-p-a-g-e-f-o-r-n-o-p-r"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
