import { State as ContactState } from './contactsReducer';

export default interface AppState {
    readonly contacts: ContactState;
}
