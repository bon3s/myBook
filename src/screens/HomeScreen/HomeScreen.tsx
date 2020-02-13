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
    handleEditClick: (id: string) => void;
    handleFavoriteClick: (id: string) => void;
    handleContactClick: (id: string) => void;
    handleSearchInput: (query: string) => void;
}

const HomeScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <HomeScreenStyles>
                <SearchBar handleSearchInput={props.handleSearchInput} />
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
                                                history={props.history}
                                                handleFavoriteClick={
                                                    props.handleFavoriteClick
                                                }
                                                handleEditClick={
                                                    props.handleEditClick
                                                }
                                                handleDeleteClick={
                                                    props.handleDeleteClick
                                                }
                                                handleContactClick={
                                                    props.handleContactClick
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
