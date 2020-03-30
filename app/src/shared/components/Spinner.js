import "firebase/firestore";

import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

export const Spinner = ({ inProgress, children }) => (
    <ScrollView>
      {inProgress 
        ? <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
        : children
      }
    </ScrollView>
  );

const styles = StyleSheet.create({
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       minHeight: 114,
       height: 500
    }
 })

export default Spinner

