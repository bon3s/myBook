import React from 'react';
import { SearchBarStyles } from './styles/SearchbarStyles';
import { Container, Row, Form, Col } from 'react-bootstrap';

interface Props {}

export const SearchBar = (props: Props) => {
    return (
        <SearchBarStyles>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} sm={12}>
                        <div className="form-wrapper">
                            <Form>
                                <Form.Group controlId="search">
                                    <Form.Control type="search" />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SearchBarStyles>
    );
};
