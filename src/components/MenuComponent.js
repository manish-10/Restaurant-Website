import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'
const RenderMenuItems = ({ dish, onClick }) => {
  return (
    <Card >
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />

        <CardImgOverlay className="ml-5">
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>

  );
}
const Menu = (props) => {
  let menu = props.dishes.map((dish) => {
      return(
        <div key={dish.id} className="col-12 col-md-5">
        <RenderMenuItems dish={dish}/>
      </div>
      )
  })
  return menu;
}
const RenderMenu = (props) => {

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Menu
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>Menu</h3>
        <hr/>
      </div>
      <div className="row">
        <Menu dishes={props.dishes} onClick={props.onClick} />
      </div>
    </div>
  );

}

export default RenderMenu;
