import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import TabBarIcon from './TabBarIcon';
import { materialTheme } from '../constants'

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  render() {
    const { inProgress, navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={product.image} resizeMode="contain" style={imageStyles} />
        </Block>
        <Block flex space="evenly" style={styles.productDescription}>
          <Text center size={14} style={styles.productTitle}>{product.title}</Text>
          {inProgress && <ActivityIndicator style={styles.productTitle} size="small" color={materialTheme.COLORS.PRIMARY} />}
        </Block>
      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    alignContent: 'center'
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});