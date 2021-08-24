import { Container, Card ,Button, Row, Col} from "react-bootstrap"
import books from "../data/horror.json"

const LatestRelease = () => {
    return (
   <Container>
       <h4 className="mb-3">Latest Releases</h4>
       
   <Row>
       
       {
           books.map( book => (
            <Col xs={2} md={2} key={book.asin}>
                
          <Card>
           <Card.Img variant="top" src={book.img} />
           <Card.Body>
           <Button variant="dark">Buy</Button>

          </Card.Body>
         </Card>
         </Col>
           ))
       }
     
    </Row>    
   </Container>     
    )
}

export default LatestRelease