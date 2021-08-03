import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import DetailPage from '../../pages/Detail';
import Content from '../Content/Content.component';
import Header from '../Header';
import Layout from '../Layout';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Router>
      <Layout>
        <Header onSearch={handleInput} />
        <Content>
          <Switch>
            <Route path="/" exact>
              <HomePage searchTerm={searchTerm} />
            </Route>
            <Route path="/detail/:id" exact>
              <DetailPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
