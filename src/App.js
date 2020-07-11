import React, { useState } from "react";
import Navegation from "./components/Navegation";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Home from "./pages/Home"
import About from "./pages/About";
import {
  BrowserRouter as Router, Switch, Route,Redirect
} from "react-router-dom";
import Loading from "./components/Loading";



function App() {
  const [page, setPage] = useState(1)
  const handleChangePage = page =>{
    setPage(page)
  }

  const query = gql`
  {
    launchesPast(limit: 12, offset: ${page*12}) {
      mission_name
      launch_date_local
      links {
        article_link
        wikipedia
        flickr_images
      }
      launch_success
      id
    }
    launchesPastResult {
      result {
        totalCount
      }
    }
    company {
      name
      links {
        flickr
        website
      }
      summary
      launch_sites
    }
  }
  
  `;
  return (
    <Router basename="/prueba-yema">
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <p>Error!</p>;
          return  <div className="App">
            
              <Navegation />
                <Switch>
                  <Route exact path="/about">
                    <About datos={data} />
                  </Route>
                  <Route exact path="/">
                    <Redirect to="/home/1" />
                  </Route>
                  <Route exact path="/home/:page">
                    <Home data={data} onChangePage={page => handleChangePage(page)}/>
                  </Route>
                </Switch>

         
        </div>

        }}
      </Query>
    </Router>
  );
}

export default App;
