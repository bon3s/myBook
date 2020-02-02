import { State as ContactState } from './contactsReducer';

export interface AppState {
    readonly contact: ContactState;
}
