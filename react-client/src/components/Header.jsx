import React from 'react';
import { Row, Col} from 'react-bootstrap';

const Header = function() {

  return (
    <Row>
      <Col md={2} xs={2}>
        <br />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Col>

      <Col md={8} xs={8}>
        <img src="http://i68.tinypic.com/f20aae.png"/>
      </Col>

      <Col md={2} xs={2}>
        <br />
        <img src="https://piskel-imgstore-b.appspot.com/img/a568dc78-8bb3-11e8-8057-bb0472812b9a.gif" />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Col>
    </Row>
    )

}



export default Header