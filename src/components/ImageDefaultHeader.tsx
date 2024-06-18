/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { Image, SafeAreaView, View, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  isFavorite?: boolean;
  onDownload?: () => void;
  onFavorite?: () => void;
  onRequestClose: () => void;
};

const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };

const ImageDefaultHeader = ({ isFavorite, onDownload, onFavorite, onRequestClose }: Props) => (
  <SafeAreaView style={styles.root}>
    <TouchableOpacity style={styles.closeButton} onPress={onRequestClose} hitSlop={HIT_SLOP}>
        <Image resizeMode={"contain"} source={require('../images/close.png')} style={styles.download} />
    </TouchableOpacity>
    <View style={{ flexDirection: 'row', gap: 4 }}>
        <TouchableOpacity activeOpacity={0.7} style={styles.closeButton} onPress={onFavorite} hitSlop={HIT_SLOP}>
            <Image resizeMode={"contain"} source={isFavorite ? require('../images/heart_solid.png') : require('../images/heart.png')} style={styles.download} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.closeButton} onPress={onDownload} hitSlop={HIT_SLOP}>
            <Image resizeMode={"contain"} source={require('../images/download.png')} style={styles.download} />
        </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16,
  },
  closeButton: {
    marginRight: 8,
    marginTop: 8,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#00000077",
  },
  closeText: {
    lineHeight: 22,
    fontSize: 19,
    textAlign: "center",
    color: "#FFF",
    includeFontPadding: false,
  },
  download: { 
      height: 24,
      tintColor: "#FFF",
      width: 24,
  },
});

export default ImageDefaultHeader;
