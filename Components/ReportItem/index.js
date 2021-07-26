/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";

export const ReportItem = ({ image, description }) => (
    <View key={description} style={styles.row}>
        <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={{fontWeight: "bold"}}>Description:</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    </View>
);

ReportItem.propTypes = {
    image: PropTypes.string,
    description: PropTypes.string
}