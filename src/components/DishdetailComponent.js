import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom'

const RenderComment=({comments})=>{

  let options = { year: "numeric", month: "short", day: "numeric" };
  return(
    <div className="col-12 col-md-5 mt-5">
  <h3>Comments</h3>
         { comments.map((com) => {
        return (
          <div key={com.id} className="col-12 mt-3">
            <ul className="list-unstyled">
              <li>{com.comment}</li>
              <li>
                <p>-- {com.author} , {new Date(com.date).toLocaleDateString("en-US", options)}</p>
              </li>
            </ul>
          </div>
        );
      })};
  </div>
  )
      
      
}
const RenderMenu=({dish})=>{
  return (
    <div className="col-12 col-md-5 mt-5">
              <Card>
                <CardImg
                  width="100%"
                  object
                  src={dish.image}
                  alt={dish.name}
                />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
  )
}

const DishDetail=(props)=> {
  
    if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {props.dish.name}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr/>
      </div>
      </div>
          <div className="row">
            <RenderMenu dish={props.dish}/>
            <RenderComment comments={props.comments}/>
            </div>
          </div>
        
      );
    } else {
      return <div></div>;
    }
  }


export default DishDetail;
