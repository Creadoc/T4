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
                        Enter your email and we'll send you a reset password email.
                    </Form.Text>
                </Form.Group>
                <Button className="forgotBtn" variant="primary">Submit</Button>
            </Form>
        </div>
    );
}

export default ForgotPassword;