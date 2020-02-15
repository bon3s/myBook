import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactItem } from '../../components/Contact/ContactItem';
import { AddContactItem } from '../../components/Contact/AddContactItem';
import { SearchBar } from '../../components/Searchbar/Searchbar';
import { HomeScreenStyles } from './styles/HomeScreenStyles';
import { ContactType } from '../../types/ContactType';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

interface Props extends RouterProps {
    contacts: ContactType[];
    modalVisible: boolean;
    contactDeleteId: string;
    handleModalClose: () => void;
    handleDeleteClick: (item: ContactType) => void;
    handleDeleteContact: (id: string) => void;
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
                                props.contacts.map((item, index) => {
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
            <DeleteModal
                visible={props.modalVisible}
                handleModalClose={props.handleModalClose}
                contactDeleteId={props.contactDeleteId}
                handleDeleteContact={props.handleDeleteContact}
            />
        </ScreenWrapper>
    );
};

export default HomeScreen;
