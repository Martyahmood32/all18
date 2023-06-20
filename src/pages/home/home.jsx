import React from 'react'
import './home.css';
import { Card, CardGroup,} from "react-bootstrap";



export const Home = () => {

  return (
    <div className='Home'>
    <div className="img">
    <img src="/images/blackall18.png" className='App-logo' alt="logo" />
    </div>
      <div className='banner-card'>
        <img src="https://media.wired.com/photos/60f9b8a417ecd990dacf3c75/4:3/w_1439,h_1079,c_limit/Business-Self-Driving-Trucks-TuSimple.jpg" alt="" />     
      </div>
      <div className="About">
        <h1 className='About-us'>Drive and Thrive</h1>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/transportation/semi-trucks/trucks-on-highway.jpg?1563374092" />
        <Card.Body>
          <Card.Title>Here at  All 18 Dispatching and Trucking</Card.Title>
          <Card.Text className='sent'>
          We provide our customers with reliable transportation services. Our logistics based company provides time sensitive services to customers throughout the lower 48 states. We are a dedicated team of experienced professionals that make it their mission to make sure our customer’s freight is picked-up and delivered on time
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.customerservicemanager.com/wp-content/uploads/2015/05/callcenter.jpg" />
        <Card.Body>
          <Card.Title>It’s not about Rates, it's about Relationships!</Card.Title>
          <Card.Text className='texted'>
          Too often in this business Volume is the way to success. Promising to save you money, but failing to deliver. That just is not the way we do business at 
All 18 Dispatching and Trucking{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.shopmyexchange.com/assets/static/customer-service/img/customer-service-header01.jpg" />
        <Card.Body>
          <Card.Title className=''></Card.Title>
          <Card.Text className='hey'>You're never just a number at</Card.Text>
          <Card.Text className='hi'>All 18 Dispatching and Trucking</Card.Text>
          <Card.Text className='cation'>Communication is the driving force</Card.Text>
          <Card.Text className='text'>
          We want to work with YOU as a team member. We want to know you as a person inside and outside of the truck. Your individual profile with your personal preferences. All 18 Dispatching and Trucking is a place where you are treated with respect as an individual, not a number.
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
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/010/553/523/original/collaboration-agreement-logo-design-contract-deal-logo-vector.jpg" />
        <Card.Body>
          <Card.Title>Dispatch Service Agreement</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/870888234/vector/shield-icon.jpg?s=612x612&w=0&k=20&c=5YgNMBErAGcMDFe4WKYGyhXb_WgzRPwPUzFmUpS6HlM=" />
        <Card.Body>
          <Card.Title>Certificate of Insurance</Card.Title>
        </Card.Body>
       
        </Card>

      <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfgTDmKJDjJ5m2OW0guFgAhU-ZA0vYDl93Ebs9L-9WzvE4vfkKsSoP4kPtXKwBm0eYjk&usqp=CAU" />
        <Card.Body>
          <Card.Title>Copy of MC Authority</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89_U3TASCPmyph-4Pfyetx7GQkEdsY04oEA&usqp=CAU" />
        <Card.Body>
          <Card.Title>W-9 Form</Card.Title>
        </Card.Body>
        
        </Card>

      <Card>
      <Card.Img variant="top" src="data:image/png;base64,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" /> 
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
