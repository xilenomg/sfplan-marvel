import ACTIONS from './action';
import _ from 'lodash';

const defaultState = {
  loading: false,
  error: null,
  characters: {},
  savedCharacters: [],
  loadingCharacter: false,
  errorCharacter: null,
  character: null
};

const characterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SAVE_CHARACTER: {
      let item = action.data;
      let newItem = {
        id: item.id,
        name: item.name,
        newName: item.newName,
        thumbnail: item.thumbnail,
        description: item.description,
      };
      let newState = _.cloneDeep(state);
      newState.savedCharacters.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_CHARACTER: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.data });
      newState.savedCharacters.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.LIST_CHARACTERS: {
      let newState = _.cloneDeep(state);
      newState.loading = false;
      newState.error = null;
      return newState;
    }

    case ACTIONS.Types.LIST_CHARACTERS_LOADING: {
      let newState = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    }

    case ACTIONS.Types.LIST_CHARACTERS_SUCCESS: {
      let newState = _.cloneDeep(state);
      newState.loading = false;
      newState.characters[`page-${action.page}`] = action.data;
      newState.error = null;
      return newState;
    }

    case ACTIONS.Types.LIST_CHARACTERS_ERROR: {
      let newState = _.cloneDeep(state);
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }



    case ACTIONS.Types.LOAD_CHARACTER: {
      let newState = _.cloneDeep(state);
      newState.loadingCharacter = false;
      newState.errorCharacter = null;
      return newState;
    }

    case ACTIONS.Types.LOAD_CHARACTER_LOADING: {
      let newState = _.cloneDeep(state);
      newState.loadingCharacter = true;
      newState.character = null
      return newState;
    }

    case ACTIONS.Types.LOAD_CHARACTER_SUCCESS: {
      let newState = _.cloneDeep(state);
      newState.loadingCharacter = false;
      newState.character = action.data;
      newState.errorCharacter = null;
      return newState;
    }

    case ACTIONS.Types.LOAD_CHARACTER_ERROR: {
      let newState = _.cloneDeep(state);
      newState.loadingCharacter = false;
      newState.errorCharacter = action.error;
      newState.character = null
      return newState;
    }

    default:
      return state;
  }
};

export default characterReducer;
