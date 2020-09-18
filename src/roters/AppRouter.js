import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchComponent from '../updatecomponent/updatehooks/SearchComponent'

const AppRouter = () => (
  

    <BrowserRouter>
       
        <Switch>
            
            <Route path="/Search" component={SearchComponent} exact={true} />
        </Switch>
    
    </BrowserRouter >


);
export default AppRouter;