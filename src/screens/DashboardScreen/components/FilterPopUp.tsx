
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BottomTabNavigation } from '@navigation'
import { MyButton, MyText, PopupModal } from '@components'
import { MY_COLORS } from '@constants'

const FilterPopUp = () => {
    const [isPrioritySelected, setIsPrioritySelected] = useState('Low');
    const [isDateSelected, setIsDateSelected] = useState('Over Date');

    return (
        <View>
            <PopupModal isVisible={true} onClose={() => { }}>
                <View style={{ gap: 10, padding: 10 }}>
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
                        <MyText p color='white'>Date</MyText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 }}>
                            <MyButton
                                onPress={() => { setIsDateSelected('Over Date') }}
                                title='Over Date'
                                style={{
                                    flex: 1,
                                    backgroundColor: isDateSelected === 'Over Date' ? 'white' : MY_COLORS.PRIMARY,
                                    borderColor: isDateSelected === 'Over Date' ? 'transparent' : 'white',
                                    borderWidth: 1
                                }}
                                btnType={isDateSelected === 'Over Date' ? 'white' : 'secondary'}
                            />
                            <MyButton
                                onPress={() => { setIsDateSelected('Upcoming') }}
                                title='Upcoming'
                                style={{
                                    flex: 1,
                                    backgroundColor: isDateSelected === 'Upcoming' ? 'white' : MY_COLORS.PRIMARY,
                                    borderColor: isDateSelected === 'Upcoming' ? 'transparent' : 'white',
                                    borderWidth: 1
                                }}
                                btnType={isDateSelected === 'Upcoming' ? 'white' : 'secondary'}
                            />
                        </View>
                    </View>
                </View>
            </PopupModal>
        </View>
    );

}

export default FilterPopUp

const styles = StyleSheet.create({})


