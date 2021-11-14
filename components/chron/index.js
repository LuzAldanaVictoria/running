import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import moment from "moment";
import RoundButton from './roundbutton/';
import ButtonsRow from "./buttonsRow/";
import LapsTable from "./lapsTable";
import Timer from "./timer";

const Chron = () => {

    const [time, setTime] = useState({
        start: 0,
        now: 0,
        laps: []
    })
    const timer = time.now - time.start;


    const start = () => {
        const now = new Date().getTime();
        setTime((prevState) => {
                return {
                    ...prevState,
                    start: now,
                    laps: [0]
                }
            }
        )
        var chronTimer;
        chronTimer = setInterval(() => {
            setTime((prevState) => {
                    return {...prevState, now: new Date().getTime()}
                }
            )
        }, 100)
    }

    const lap = () => {
        const timestamp = new Date().getTime();
        const [firstLap, ...other] = time.laps
        setTime((prevState) => {
            return {laps: [0, firstLap + prevState.now - prevState.start, ...other], start: timestamp, now: timestamp}
        })
    }
    const stop = () => {

    }
    return (
        <View style={styles.container}>
            <Timer interval={timer}></Timer>
            {time.laps.length === 0 && (
                <ButtonsRow>
                    <RoundButton title={'Reset'} color={'#FFFFFF'} background={'#3D3D3D'}/>
                    <RoundButton title={'Start'} color={'#50D167'} background={'#1B361F'} onPress={start}/>
                </ButtonsRow>
            )}
            {time.start > 0 && (
                <ButtonsRow>
                    <RoundButton title={'Lap'} color={'#FFFFFF'} background={'#3D3D3D'} onPress={lap}/>
                    <RoundButton title={'Stop'} color={'#E33935'} background={'#3C1715'} onPress={stop}/>
                </ButtonsRow>
            )}
            <LapsTable laps={time.laps} time={time.now}></LapsTable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        paddingTop: 130,
        paddingHorizontal: 20
    }, buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 30
    }
})


export default Chron;