/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useContext, useEffect, useState } from "react";
import { Image, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useInput } from "../../hooks/useInput";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { Context } from "../../Context";

export const Creation = ({ history }) => {
    const description = useInput("");
    const [image, setImage] = useState(null);
    const { addReport } = useContext(Context)

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            quality: 0.3,
            base64: true
        });
    
        if (!result.cancelled) {
            setImage(result.base64);
        }
    };

    const goBack = () => {
        description.onChangeText("");
        setImage(null);
        history.goBack();
    }

    const createReport = () => {
        if(!description.value){
            alert("You must indicate a description")
        }

        if(!image){
            alert("You must select an image")
        }

        addReport({
            description: description.value,
            image
        });

        goBack();
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create Report</Text>
            <Text style={styles.text}>Please complete the information to create a report</Text>

            <Text style={styles.label}>Description:</Text>
            <TextInput style={styles.input} multiline numberOfLines={4} {...description} maxLength={170} />

            <Text style={styles.label}>Image:</Text>
            {image ? (
                    <TouchableOpacity style={styles.defaultImageContainer} onPress={() => pickImage()}>
                        <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${image}`}} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.defaultImageContainer} onPress={() => pickImage()}>
                        <Feather name="camera" size={30} color="white" />
                        <Text style={{color: "white"}}>Tap here to choose a image</Text>
                    </TouchableOpacity>
                )
            }
            
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.right, !image || !description.value ? styles.disabled : {} ]} onPress={() => createReport()} disabled={!image || !description.value}>
                    <Text style={styles.textButton}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => goBack()}>
                    <Text style={styles.textButton}>Cancel</Text>
                </TouchableOpacity>
            </View>  
        </SafeAreaView>
    )
}