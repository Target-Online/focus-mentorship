import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Spinner, Card } from '../../../shared/components';
import { Images } from '../../../../../shared/constants';
import { SubFoldersContext } from '../../../root/store';

const { height } = Dimensions.get('screen');

export default SubFolders = props => {
  const { product } = props.navigation.state.params;
  const [subFolders] = useContext(SubFoldersContext);
  const data = subFolders.data.filter(sf => sf.parentId == product.id)

  return (
    <Spinner inProgress={subFolders.inProgress}>
      <Block flex style={[styles.options, !data.length == 0 && { height: height }]}>
        <Block>
          {data
            .sort((a, b) => b.createdAt - a.createdAt)
            .map(subFolder =>
            <Card
              key={subFolder.name}
              title={subFolder.name}
              image={Images.class2020}
              product={subFolder}
              redirect={'SubFolderDocuments'}
              horizontal
            />
          )}
        </Block>
        <Block center style={{ marginTop: 10 }}>
          {data.length == 0 && <Text>No sub folders.</Text>}
        </Block>
      </Block>
    </Spinner>
  )
}

const styles = StyleSheet.create({
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  settings: {
    paddingVertical: theme.SIZES.BASE / 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  }
});