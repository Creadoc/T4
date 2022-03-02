import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/button';

function ForgotPassword() {
    return (
        <div className="forgotPasswordContainer">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        &nbsp;
                    </Form.Text>
                </Form.Group>
                <div className="forgotButton">
                    <Button className="forgotBtn" variant="primary">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default ForgotPassword;