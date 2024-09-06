import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MyButton, MyText, MyTextInput } from '@components'
import { MY_COLORS } from '@constants';

const index = () => {
  const [isPrioritySelected, setIsPrioritySelected] = useState('Low');
  const [isSaveSelected, setIsSaveSelected] = useState(false);

  return (
    <View style={{ backgroundColor: 'black', height: '100%' }}>
      <View style={{ gap: 20, padding: 12, backgroundColor: MY_COLORS.PRIMARY, borderRadius: 10, marginVertical: 20, marginHorizontal: 12 }}>
        <View>
          <MyText color='white'>Title</MyText>
          <MyTextInput placeholder='Complete' onChangeText={() => { }} />
        </View>
        <View>
          <MyText color='white'>Description</MyText>
          <MyTextInput placeholder='Complete' onChangeText={() => { }} />
        </View>
        <View>
          <MyText color='white'>Due Date</MyText>
          <MyTextInput placeholder='Complete' onChangeText={() => { }} />
        </View>
        <View>
          <MyText p color='white'>Priority</MyText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 }}>
            <MyButton
              onPress={() => { setIsPrioritySelected('Low') }}
              title='Low'
              style={{
                flex: 1,
                backgroundColor: isPrioritySelected === 'Low' ? 'white' : 'transparent',
                borderColor: isPrioritySelected === 'Low' ? 'transparent' : 'white',
                borderWidth: 1
              }}
              btnType={isPrioritySelected === 'Low' ? 'white' : 'secondary'}
            />
            <MyButton
              onPress={() => { setIsPrioritySelected('Medium') }}
              title='Medium'
              style={{
                flex: 1,
                backgroundColor: isPrioritySelected === 'Medium' ? 'white' : 'transparent',
                borderColor: isPrioritySelected === 'Medium' ? 'transparent' : 'white',
                borderWidth: 1
              }}
              btnType={isPrioritySelected === 'Medium' ? 'white' : 'secondary'}

            />
            <MyButton
              onPress={() => { setIsPrioritySelected('High') }}
              title='High'
              style={{
                flex: 1,
                backgroundColor: isPrioritySelected === 'High' ? 'white' : 'transparent',
                borderColor: isPrioritySelected === 'High' ? 'transparent' : 'white',
                borderWidth: 1
              }}
              btnType={isPrioritySelected === 'High' ? 'white' : 'secondary'}
            />
          </View>
        </View>
        <View>
          <MyText color='white'>Assign to user</MyText>
          <MyButton title='Select User' onPress={() => { }} />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginTop: 40, width: '40%', gap: 10 }}>
          <MyButton title='Save' onPress={() => { setIsSaveSelected(true) }} style={{ flex: 1 }} />
          <MyButton title='Cancel' onPress={() => { setIsSaveSelected(false) }}
            style={{ flex: 1, backgroundColor: MY_COLORS.PRIMARY, borderRadius: 10, borderWidth: 1, borderColor: 'white' }}
            btnType='secondary' />

        </View>
      </View>
    </View>

  )
}

export default index

const styles = StyleSheet.create({})

