import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './album-detail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(resp => this.setState( { albums: [...resp.data] } ));
  };

  renderAlbums () {
    return this.state.albums.map(e =>
      <AlbumDetail key={e.title} album={e} />)
  };

  render() {
    const { albums } = this.state;
    return(
      <ScrollView>
        {albums.length > 0 ? this.renderAlbums() : <Text>Loading...</Text> }
      </ScrollView>
    )
  }
}

export default AlbumList;
