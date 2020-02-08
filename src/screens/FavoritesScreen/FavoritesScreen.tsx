import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { FavoritesScreenStyles } from './styles/FavoritesScreenStyles';
import { ContactType } from '../../types/ContactType';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBar } from '../../components/Searchbar/Searchbar';
import { ContactItem } from '../../components/Contact/ContactItem';

interface Props extends RouterProps {
    contacts: ContactType[];
    handleDeleteClick: (item: ContactType) => void;
    handleEditClick: (item: ContactType) => void;
    handleFavoriteClick: (id: string) => void;
}
interface State {}

const FavoritesScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <FavoritesScreenStyles>
                <SearchBar />
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
        </ScreenWrapper>
    );
};

export default FavoritesScreen;
