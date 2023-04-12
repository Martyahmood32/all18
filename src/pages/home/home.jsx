import React from 'react'
import './home.css';
import { Card, CardGroup,} from "react-bootstrap";


export const Home = () => {

  return (
    <div className='Home'>
    <h3 className="head">All 18</h3>
    <p className='alliance'>Dispatching and Trucking</p>
      <div className='banner-card'>
        <img src="https://media.wired.com/photos/60f9b8a417ecd990dacf3c75/4:3/w_1439,h_1079,c_limit/Business-Self-Driving-Trucks-TuSimple.jpg" alt="" />     
      </div>
      <div className="About">
        <h1 className='About-us'>Drive and Thrive</h1>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/transportation/semi-trucks/trucks-on-highway.jpg?1563374092" />
        <Card.Body>
          <Card.Title>Here at  Alliance Dispatching and Trucking</Card.Title>
          <Card.Text>
          We provide our customers with reliable transportation services. Our logistics based company  provides time sensitive services to customers throughout the lower 48 states. We are a freight broker with a dedicated team of experienced professionals who make it their mission to make sure our customer’s freight is picked-up and delivered on time
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.customerservicemanager.com/wp-content/uploads/2015/05/callcenter.jpg" />
        <Card.Body>
          <Card.Title>It’s not about Rates, it's about Relationships!</Card.Title>
          <Card.Text>
          Too often in this business Volume is the way to success. Promising to save you money, but failing to deliver. That just is not the way we do business at 
Alliance Dispatching and Trucking{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.shopmyexchange.com/assets/static/customer-service/img/customer-service-header01.jpg" />
        <Card.Body>
          <Card.Title className=''></Card.Title>
          <Card.Text className='hey'>You're never just a number</Card.Text>
          <Card.Text className='cation'>Communication is the driving force</Card.Text>
          <Card.Text className='text'>
          We want to work with YOU as a team member. We want to know you as a person inside and outside of the truck. Your individual profile with your personal preferences. Alliance is a place where you are treated with respect as an individual, not a number.
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </CardGroup>
      </div>
     <div className="started">
      <h1 className='offer'>How to Get started</h1>
      <div className="start-cards">
      <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Dispatch Service Agreement</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
        <Card.Body>
          <Card.Title>Certificate of Insurance</Card.Title>
        </Card.Body>
       
        </Card>

      <Card>
        <Card.Body>
          <Card.Title>Copy of MC Authority</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
        <Card.Body>
          <Card.Title>W-9 Form</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
        <Card.Body>
          <Card.Title>Driver & Truck ID</Card.Title>
        </Card.Body>
        
        </Card>
      </CardGroup>
    </div>
     </div>


    </div>
  
  )
}
