import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Spinner, Card } from '../../shared/components';
import { Images } from '../../../../shared/constants';
import { FoldersContext } from '../../root/store';

const { height } = Dimensions.get('screen');

export default Resources = () => {
  const [resources] = useContext(FoldersContext);
  const data = resources.data.sort((a, b) => b.createdAt - a.createdAt)

  return (
    <Spinner inProgress={resources.inProgress}>
      <Block flex style={[styles.options, !data.length == 0 && { height: height }]}>
        <ScrollView showsVerticalScrollIndicator={true}>
          {data.map(resource =>
            <Card
              key={resource.name}
              title={resource.name}
              image={resource.avatar == '' ? Images.folder : { uri: resource.avatar }}
              product={resource}
              redirect={'ResourcesView'}
              horizontal
            />
          )}
        </ScrollView>
        <Block center style={{ marginTop: 10 }}>
          {data.length == 0 && <Text>No folders.</Text>}
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