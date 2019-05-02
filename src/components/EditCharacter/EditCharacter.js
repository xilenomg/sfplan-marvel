import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'md5';
import ACTIONS from '../../redux/action';
import Character from '../Character/Character';
import Loading from '../Loading/Loading';
import { generateTS } from '../../util/Date';
import './EditCharacter.scss';
import '../../styles/Form.scss';
class EditCharacter extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } = {} } = {} } = props;
    this.state = {
      paramId: id,
      name: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const { paramId } = this.state;
    const { getCharacter } = this.props;
    getCharacter(paramId).then(() => {
      const { character } = this.props;
      if (character) {
        this.setState(state => ({
          name: character.name,
          description: character.description
        }));
      }
    });
  }

  handleOnChange(event) {
    const { id, value } = event.target;
    this.setState(() => {
      return {
        [id]: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, description } = this.state;
    const {
      character: { thumbnail: { path, extension } = {} } = {},
      saveCharacter,
      history
    } = this.props;

    const hash = md5(`${generateTS()}${Math.random()}`);

    saveCharacter({
      id: hash,
      name,
      description,
      thumbnail: `${path}.${extension}`
    });
    history.push('/list');
  }

  render() {
    const { loadingCharacter, errorCharacter, character } = this.props;

    if (loadingCharacter) {
      return (
        <div className="EditCharacter">
          <Loading />
        </div>
      );
    }

    if (errorCharacter) {
      return <div className="EditCharacter">Nenhum dado foi encontrado!</div>;
    }

    if (character) {
      const { thumbnail, name, description, id } = character;
      const image = `${thumbnail.path}.${thumbnail.extension}`;
      const { name: fieldName, description: fieldDescription } = this.state;
      return (
        <div className="EditCharacter">
          <h1>Editando {name}</h1>
          <div className="EditCharacter-content">
            <div className="EditCharacter-content-left">
              <Character
                id={id}
                image={image}
                name={name}
                description={description}
              />
            </div>

            <div className="EditCharacter-content-right">
              <form className="Form" onSubmit={this.handleSubmit}>
                <div className="Form-field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="name"
                    id="name"
                    required
                    onChange={event => this.handleOnChange(event)}
                    value={fieldName}
                  />
                </div>
                <div className="Form-field">
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    type="description"
                    id="description"
                    onChange={event => this.handleOnChange(event)}
                    value={fieldDescription}
                  />
                </div>

                <div className="Form-action">
                  <button type="submit" className="btn btn-primary">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  character: state.character,
  loadingCharacter: state.loadingCharacter,
  errorCharacter: state.errorCharacter
});

const mapDispatchToProps = dispatch => ({
  getCharacter: id => dispatch(ACTIONS.getCharacter(id)),
  saveCharacter: character => dispatch(ACTIONS.saveCharacter(character))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCharacter);
