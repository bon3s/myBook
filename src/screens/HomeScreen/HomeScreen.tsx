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
}
interface State {}

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
                            {props.contacts.map(item => {
                                return (
                                    <Col lg={3} md={6} sm={12}>
                                        <ContactItem
                                            contactData={item}
                                            favorite={false}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </HomeScreenStyles>
        </ScreenWrapper>
    );
};

export default HomeScreen;
