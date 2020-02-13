import React, { useState, SyntheticEvent } from 'react';
import { SearchBarStyles } from './styles/SearchbarStyles';
import { Container, Row, Form, Col } from 'react-bootstrap';

interface Props {
    handleSearchInput: (query: string) => void;
}

export const SearchBar = (props: Props) => {
    const [val, setVal] = useState('');

    return (
        <SearchBarStyles>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} sm={12}>
                        <div className="form-wrapper">
                            <Form>
                                <Form.Group controlId="search">
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={val}
                                        onChange={(e: SyntheticEvent) => {
                                            let element = e.target as HTMLInputElement;
                                            setVal(element.value);
                                            props.handleSearchInput(
                                                element.value
                                            );
                                        }}
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SearchBarStyles>
    );
};
