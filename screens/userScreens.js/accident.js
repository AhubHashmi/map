import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../../../styling'

export default function Accident() {
    return (
        <View style={[styles.bgLight, styles.h100]}>
            <View style={[styles.bgPrimary, styles.p2]}>
                <Text style={[styles.textWhite, styles.fs2, styles.textCenter]}>Accidents</Text>
            </View>
            <View style={[styles.bgInfo, styles.p2]}>
                <Text style={[styles.textWhite, styles.fs2, styles.textCenter]}>Muhammad : 03133206171</Text>
            </View>
            <View style={[styles.h20, styles.flexCenter, styles.border3, styles.roundedPill, styles.my5, styles.m5, styles.bgInfo, styles.my5]}>
                <Text style={[styles.fs1, styles.textWhite]}>SQuiP</Text>
            </View>
            <View style={[styles.pt5, styles.px1, styles.my5]}>
                <TouchableOpacity
                    style={[styles.btn]}>
                    <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}