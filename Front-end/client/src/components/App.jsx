/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';
import PhotoContainer from './PhotoContainer.jsx';
import PhotoModal from './PhotoModal.jsx';

const Wrapper = styled.div`
  display: block;
  max-width: 660px;
  max-height: 500px;
  margin: auto;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_id: Math.floor(Math.random() * 100),
      photos: [],
      ableToRender: false,
      showModal: false,
    };
    this.getRestaurantsPhotos = this.getRestaurantsPhotos.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.getRestaurantsPhotos();
  }

  getRestaurantsPhotos() {
    axios.get(`api/restaurants/photos/${this.state.restaurant_id}`, {
      params: {
        restaurant_id: this.state.restaurant_id,
      },
    })
      .then((response) => {
        let id;
        if (window.location.href.split('/')[3] === '') {
          id = 1;
        } else {
          id = parseInt(window.location.href.split('?')[1]);
        }
        this.setState({
          ableToRender: true,
          restaurant_name: response.data[0].name,
          restaurant_id: id,
          photos: response.data[0].photos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleImageClick() {
    this.toggleModal();
  }

  toggleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    const { showModal, photos } = this.state;
    if (this.state.ableToRender) {
      return (
        <Wrapper>
          <Header className="header" photos={this.state.photos} />
          <Categorylist className="categories" />
          <PhotoContainer
            className="container"
            photos={photos}
            handleClick={this.handleImageClick}
          />
          <PhotoModal
            showModal={showModal}
            toggleModal={this.toggleModal}
            photos={photos}
          >
          </PhotoModal>
        </Wrapper>
      );
    }
    return (
      <div></div>
    );
  }
}

export default App;
