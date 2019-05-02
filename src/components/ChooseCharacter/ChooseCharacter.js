import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../redux/action';
import Character from '../../components/Character/Character';
import Loading from '../../components/Loading/Loading';

import './ChooseCharacter.scss';
import '../../styles/Pagination.scss';

class ChooseCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      characters: [],
      character: {
        name: null,
        image: null,
        description: null
      }
    };

    this.loadPage = this.loadPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.characterOnClick = this.characterOnClick.bind(this)
  }

  componentDidMount() {
    const { page } = this.state;
    this.loadPage(page);
  }

  loadPage(page) {
    const { characters } = this.props;
    if (!characters[`page-${page}`]) {
      this.props.listCharacters(page);
    }
  }

  previousPage() {
    this.setState(state => {
      const { page } = state;
      const newPage = page - 1;
      this.loadPage(newPage);
      return {
        page: newPage
      };
    });
  }

  nextPage() {
    this.setState(state => {
      const { page } = state;
      const newPage = page + 1;
      this.loadPage(newPage);
      return {
        page: newPage
      };
    });
  }

  characterOnClick(id) {
    const { history } = this.props;
    history.push(`/create/${id}`);
  }

  render() {
    const { page } = this.state;
    const { characters, loading, error } = this.props;
    const listCharacters = characters[`page-${page}`];

    if (loading && !error) {
      return (
        <div className="ChooseCharacter">
          <Loading />
        </div>
      );
    }

    if (!listCharacters || error) {
      return <div className="ChooseCharacter">Nenhum dado encontrado</div>;
    }

    return (
      <div className="ChooseCharacter">

        <h1>Edite seu personagem favorito</h1>

        <p>Clique sobre o personagem que você deseja editar</p>

        <div className="ChooseCharacter-list">
          {listCharacters.map(item => {
            const { id, name, thumbnail, description } = item;
            const image = `${thumbnail.path}.${thumbnail.extension}`;
            return (
              <div key={id} className="ChooseCharacter-list-item">
                <Character
                  id={id}
                  image={image}
                  name={name}
                  description={description}
                  onClick={this.characterOnClick}
                />
              </div>
            );
          })}
        </div>

        <div className="Pagination">
          <button onClick={this.previousPage} className="btn">
            Anterior
          </button>
          <span className="Page">{page + 1}</span>
          <button onClick={this.nextPage} className="btn">
            Próxima
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  listCharacters: page => dispatch(ACTIONS.listCharacters(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseCharacter);
