import React, { useContext, useReducer, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { Block, theme } from 'galio-framework';
import { CacheManager } from "react-native-expo-image-cache";

import { Spinner, Card } from '../../shared/components';
import { Images } from '../../../../shared/constants';
import { CoursesContext } from '../../root/store';

const { height } = Dimensions.get('window');

export default Courses = () => {
  const [courses] = useContext(CoursesContext);
  const data = courses.data.sort((a, b) => b.createdAt - a.createdAt)
  const noData = data.length == 0;

  return (
    <Spinner inProgress={courses.inProgress}>
    <Block flex style={[styles.options, !noData && { height: height }]}>
      <Block>
          {data.map(c =>
            <Card
              key={c.name}
              title={c.name}
              image={Images.classOf2020}
              product={c}
              redirect={'ViewCourse'}
              horizontal
            />
          )}
        </Block>
        <Block center>
            {noData && <Text>No courses.</Text>}
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