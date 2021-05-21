import React, { useState } from "react";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "./shared/Dishes";
import { COMMENTS } from "./shared/Comments";
import { LEADERS } from "./shared/Leaders";
import { PROMOTIONS } from "./shared/Promotions";
import About from './AboutComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Redirect, Route } from 'react-router-dom'
import Contact from "./ContactComponent";
const Main = () => {
  const [dishes] = useState(DISHES)
  const [comments] = useState(COMMENTS)
  const [leaders] = useState(LEADERS)
  const [promotions] = useState(PROMOTIONS)

  const Homepage = () => {
    return <Home dish={dishes.filter((dish) => dish.featured === true)[0]}
      promotion={promotions.filter((promotion) => promotion.featured === true)[0]}
      leader={leaders.filter((leader) => leader.featured === true)[0]}

    />
  }
  
  const DishWithId = ({ match }) => {
    return (<DishdetailComponent
      dish={
        dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]
      }
      comments={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
    />)

  }


  return (
    <div>
      <HeaderComponent />
      
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/menu" component={() => <MenuComponent dishes={dishes} />} />
        <Route exact path="/aboutus" component={() => <About leaders={leaders} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Redirect to="/home" />
      </Switch>
      <FooterComponent />

    </div>
  );
}


export default Main;
