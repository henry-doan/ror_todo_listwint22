import { Container, Row, Col } from "react-bootstrap";
import { PriceBox } from '../styles/mainStyles';

const Prices = () => (
  <Container>
    <h1 className="text-center">Prices</h1>

    <Row>
      <PriceBox>
        <h2>Bronze</h2>
        <h3>Base</h3>
        <ul>
          <li>Feature</li>
          <li>Feature</li>
          <li>Feature</li>
        </ul>
        <button>$</button>
      </PriceBox>

      <PriceBox>
        <h2>Silver</h2>
        <h3>Base</h3>
        <ul>
          <li>Feature</li>
          <li>Feature</li>
          <li>Feature</li>
        </ul>
        <button>$$</button>
      </PriceBox>

      <PriceBox>
        <h2>Gold</h2>
        <h3>Base</h3>
        <ul>
          <li>Feature</li>
          <li>Feature</li>
          <li>Feature</li>
        </ul>
        <button>$$$</button>
      </PriceBox>
    </Row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </Container>
)

export default Prices;