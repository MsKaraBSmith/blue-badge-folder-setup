import React from 'react';

import {
    Card, CardText, CardBody, CardTitle, CardSubtitle,Container, Button, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = function () {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                    <dl>
                        <dt>Can use state</dt>
                        <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                        <dd>with the 'useEffect' hook, functional components can perform side effect with an props or state changes.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element, but this element may have nested elements inside.</dd>
                    </dl>
                    <h1>Functional Syntax versus Arrow Function</h1>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col me="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width="100%" height="280px" src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function() </pre></CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
            </Card>
        </div>
    );
};

//Fat Arrow Functional Component - 3 fewer lines. Common in React...
const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width="100%" height="280px" src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Card cap" />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () =? </pre></CardText>
                <Button>Go somewhere</Button>
            </CardBody>
        </Card>
    </div>

// 2.2
// const FunctionalComponentDemo = function () {
//     return (
//         <div className="main">
//             <div className="mainDiv">
//                 <div>
//                     Hello React
//                 </div>
//                 <div>
//                     How are you today?
//                 </div>
//             </div>
//         </div>
//     );
// };

// 2.5
// const FunctionalComponentDemo = () => {
//     return (
//         <div className="main">
//             <div className="mainDiv">
//                <h1>Functional Component</h1>
//                <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
//                <dl>
//                    <dt>Can use state</dt>
//                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
//                    <dt>No 'this' keyword</dt>
//                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
//                    <dt>Can use effects</dt>
//                    <dd>with the 'useEffect' hook, functional components can perform side effect with an props or state changes.</dd>
//                    <dt>return()</dt>
//                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
//                </dl>
//                <h1>Functional Syntax versus Arrow Function</h1>
//             </div>
//             <div>

//             </div>
//         </div>
//     );    
// };

