import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { FavoritesScreenStyles } from './styles/FavoritesScreenStyles';
import { ContactType } from '../../types/ContactType';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBar } from '../../components/Searchbar/Searchbar';
import { ContactItem } from '../../components/Contact/ContactItem';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

interface Props extends RouterProps {
    contacts: ContactType[];
    modalVisible: boolean;
    contactDeleteId: string;
    handleDeleteClick: (item: ContactType) => void;
    handleDeleteContact: (id: string) => void;
    handleModalClose: () => void;
    handleEditClick: (id: string) => void;
    handleFavoriteClick: (id: string) => void;
    handleContactClick: (id: string) => void;
    handleSearchInput: (query: string) => void;
}

const FavoritesScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <FavoritesScreenStyles>
                <SearchBar handleSearchInput={props.handleSearchInput} />
                <div className="itemsGrid">
                    <Container>
                        <Row>
                            {props.contacts ? (
                                props.contacts.map(item => {
                                    if (item.favorite === true) {
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
                                    } else {
                                        return null;
                                    }
                                })
                            ) : (
                                <div></div>
                            )}
                        </Row>
                    </Container>
                </div>
            </FavoritesScreenStyles>
            <DeleteModal
                visible={props.modalVisible}
                handleModalClose={props.handleModalClose}
                contactDeleteId={props.contactDeleteId}
                handleDeleteContact={props.handleDeleteContact}
            />
        </ScreenWrapper>
    );
};

export default FavoritesScreen;
