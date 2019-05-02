import React, { Component } from 'react';
import { connect } from 'react-redux';
import Character from '../../components/Character/Character';

import './ListContainer.scss';
import '../../styles/Pagination.scss';

class ListContainer extends Component {
  render() {
    const { savedCharacters } = this.props;

    return (
      <div className="ListContainer">
        <h1>Personagens salvos</h1>

        <div className="ListContainer-list">
          {savedCharacters.map(item => {
            const { id, name, thumbnail, description } = item;
            return (
              <div key={id} className="ListContainer-list-item">
                <Character
                  id={id}
                  image={thumbnail}
                  name={name}
                  description={description}
                  onClick={this.characterOnClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedCharacters: state.savedCharacters
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
