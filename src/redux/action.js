import { loadCharacters, loadCharacter } from '../containers/Api';

// types of action
const Types = {
  SAVE_CHARACTER: 'SAVE_CHARACTER',
  DELETE_CHARACTER: 'DELETE_CHARACTER',

  LIST_CHARACTERS: 'LIST_CHARACTERS',
  LIST_CHARACTERS_LOADING: 'LIST_CHARACTERS_LOADING',
  LIST_CHARACTERS_SUCCESS: 'LIST_CHARACTERS_SUCCESS',
  LIST_CHARACTERS_ERROR: 'LIST_CHARACTERS_ERROR',

  LOAD_CHARACTER: 'LOAD_CHARACTER',
  LOAD_CHARACTER_LOADING: 'LOAD_CHARACTER_LOADING',
  LOAD_CHARACTER_SUCCESS: 'LOAD_CHARACTER_SUCCESS',
  LOAD_CHARACTER_ERROR: 'LOAD_CHARACTER_ERROR'
};
// actions
const saveCharacter = character => ({
  type: Types.SAVE_CHARACTER,
  data: character
});

const deleteCharacter = id => ({
  type: Types.DELETE_CHARACTER,
  data: id
});

const listCharacters = (page = 0) => dispatch => {
  dispatch({ type: Types.LIST_CHARACTERS_LOADING });
  return loadCharacters(page)
    .then(response => {
      dispatch({
        type: Types.LIST_CHARACTERS_SUCCESS,
        page: page,
        data: response.data.data.results
      });
    })
    .catch(error => {
      dispatch({ type: Types.LIST_CHARACTERS_ERROR, error: error.message });
    });
};

const getCharacter = (id) => dispatch => {
  dispatch({ type: Types.LOAD_CHARACTER_LOADING });
  return loadCharacter(id)
    .then(response => {
      dispatch({
        type: Types.LOAD_CHARACTER_SUCCESS,
        data: response.data.data.results[0]
      });
    })
    .catch(error => {
      dispatch({ type: Types.LOAD_CHARACTER_ERROR, error: error.message });
    });
};

export default {
  saveCharacter,
  deleteCharacter,
  Types,
  listCharacters,
  getCharacter
};
