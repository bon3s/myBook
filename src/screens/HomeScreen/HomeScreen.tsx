import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactItem } from '../../components/Contact/ContactItem';
import { AddContactItem } from '../../components/Contact/AddContactItem';
import { SearchBar } from '../../components/Searchbar/Searchbar';
import { HomeScreenStyles } from './styles/HomeScreenStyles';
import { ContactType } from '../../types/ContactType';

interface Props extends RouterProps {
    contacts: ContactType[];
    handleDeleteClick: (item: ContactType) => void;
    handleEditClick: (item: ContactType) => void;
    handleFavoriteClick: (id: string) => void;
}

const HomeScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <HomeScreenStyles>
                <SearchBar />
                <div className="itemsGrid">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <AddContactItem history={props.history} />
                            </Col>
                            {props.contacts ? (
                                props.contacts.map(item => {
                                    return (
                                        <Col
                                            key={item.id}
                                            lg={3}
                                            md={6}
                                            sm={12}>
                                            <ContactItem
                                                handleFavoriteClick={
                                                    props.handleFavoriteClick
                                                }
                                                handleEditClick={
                                                    props.handleEditClick
                                                }
                                                handleDeleteClick={
                                                    props.handleDeleteClick
                                                }
                                                key={item.id}
                                                contactData={item}
                                            />
                                        </Col>
                                    );
                                })
                            ) : (
                                <div></div>
                            )}
                        </Row>
                    </Container>
                </div>
            </HomeScreenStyles>
        </ScreenWrapper>
    );
};

export default HomeScreen;
