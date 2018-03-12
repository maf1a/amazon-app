import React from 'react';
import { View, Text, Image, Alert, Linking } from 'react-native';
import Card from './card';
import CardSection from './card-section';
import Button from './button';

const AlbumDetail = (props) => {
  const { title, artist, url, image, thumbnail_image } = props.album;
  const {
    header,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerText,
    headerTextContainer,
    imageStyle
  } = styles;

  const buttonOnPress = () => {
    Linking.openURL(url)
  }

  return (
    <Card>
      <CardSection>
        <View style={header}>
          <View style={thumbnailContainerStyle}>
            <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={headerTextContainer}>
            <Text style={headerText}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button payloadFunction={buttonOnPress}>Order me</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:10
  },
  headerText: {
    fontSize: 18,
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    width: null,
    height:300
  }
}

export default AlbumDetail;
