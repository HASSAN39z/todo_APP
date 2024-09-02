// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { AuthProvider } from '@context'
// import { AuthNav } from '@navigation'
// import { MyText } from '@components'
// import { DashboardScreen } from '@screens'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'

// const App = () => {
//   return (
//     <AuthProvider>
//       {/* <DashboardScreen /> */}
//       <AuthNav />
//     </AuthProvider>
//   )
// }
// export default App
// const styles = StyleSheet.create({})


// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { BottomTabNavigation } from '@navigation'
// import { MyButton, MyText, PopupModal } from '@components'
// import { MY_COLORS } from '@constants'

// const App = () => {
//   const [isPrioritySelected, setIsPrioritySelected] = useState('Low');
//   const [isDateSelected, setIsDateSelected] = useState('Over Date');

//   return (
//     <View>
//       <PopupModal isVisible={true} onClose={() => { }}>
//         <View style={{ gap: 10, padding: 10 }}>
//           <View>
//             <MyText p color='white'>Priority</MyText>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 }}>
//               <MyButton
//                 onPress={() => { setIsPrioritySelected('Low') }}
//                 title='Low'
//                 style={{
//                   flex: 1,
//                   backgroundColor: isPrioritySelected === 'Low' ? 'white' : 'transparent',
//                   borderColor: isPrioritySelected === 'Low' ? 'transparent' : 'white',
//                   borderWidth: 1
//                 }}
//                 btnType={isPrioritySelected === 'Low' ? 'white' : 'secondary'}
//               />
//               <MyButton
//                 onPress={() => { setIsPrioritySelected('Medium') }}
//                 title='Medium'
//                 style={{
//                   flex: 1,
//                   backgroundColor: isPrioritySelected === 'Medium' ? 'white' : 'transparent',
//                   borderColor: isPrioritySelected === 'Medium' ? 'transparent' : 'white',
//                   borderWidth: 1
//                 }}
//                 btnType={isPrioritySelected === 'Medium' ? 'white' : 'secondary'}

//               />
//               <MyButton
//                 onPress={() => { setIsPrioritySelected('High') }}
//                 title='High'
//                 style={{
//                   flex: 1,
//                   backgroundColor: isPrioritySelected === 'High' ? 'white' : 'transparent',
//                   borderColor: isPrioritySelected === 'High' ? 'transparent' : 'white',
//                   borderWidth: 1
//                 }}
//                 btnType={isPrioritySelected === 'High' ? 'white' : 'secondary'}
//               />
//             </View>
//           </View>
//           <View>
//             <MyText p color='white'>Date</MyText>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 }}>
//               <MyButton
//                 onPress={() => { setIsDateSelected('Over Date') }}
//                 title='Over Date'
//                 style={{
//                   flex: 1,
//                   backgroundColor: isDateSelected === 'Over Date' ? 'white' : MY_COLORS.PRIMARY,
//                   borderColor: isDateSelected === 'Over Date' ? 'transparent' : 'white',
//                   borderWidth: 1
//                 }}
//                 btnType={isDateSelected === 'Over Date' ? 'white' : 'secondary'}
//               />
//               <MyButton
//                 onPress={() => { setIsDateSelected('Upcoming') }}
//                 title='Upcoming'
//                 style={{
//                   flex: 1,
//                   backgroundColor: isDateSelected === 'Upcoming' ? 'white' : MY_COLORS.PRIMARY,
//                   borderColor: isDateSelected === 'Upcoming' ? 'transparent' : 'white',
//                   borderWidth: 1
//                 }}
//                 btnType={isDateSelected === 'Upcoming' ? 'white' : 'secondary'}
//               />
//             </View>
//           </View>
//         </View>
//       </PopupModal>
//     </View>
//   );

// }

// export default App

// const styles = StyleSheet.create({})




// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { MyButton, PopupModal } from '@components';

// const App = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isCompleted, setIsCompleted] = useState(false);

//   return (
//     <PopupModal isVisible={true} onClose={() => setIsVisible(false)}>
//       <View style={{ gap: 20, paddingVertical: 20 }}>
//         <View>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
//             <Text style={{ color: 'white', fontSize: 18 }}>Title</Text>
//             {isCompleted && <Text style={{ color: 'green', fontSize: 16 }}>Complete</Text>}
//           </View>
//           <Text style={{ color: 'gray', fontSize: 14 }}>Today - 10:00 AM</Text>
//         </View>
//         <View>
//           <Text style={{ color: 'white', marginVertical: 10 }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aspernatur molestiae possimus eaque dolor temporibus nihil asperiores necessitatibus, quasi labore, quo voluptate deleniti quod exercitationem tempora aut dicta accusantium beatae.
//           </Text>
//         </View>
//         <View style={{ marginTop: 20 }}>
//           {isCompleted ? (
//             <Text style={{ color: 'green', fontSize: 16 }}></Text>
//           ) : (
//             <View>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
//                 <MyButton title='Edit' onPress={() => { /* handle edit */ }} style={{ flex: 1, backgroundColor: 'gray' }} />
//                 <MyButton title='Delete' onPress={() => { /* handle delete */ }} style={{ flex: 1, backgroundColor: 'gray' }} />
//                 <MyButton title='Complete' onPress={() => { setIsCompleted(true) }} style={{ flex: 1, backgroundColor: 'gray' }} />
//               </View>
//               <View style={{ height: 2, backgroundColor: 'yellow', marginTop: 5 }} />
//             </View>
//           )}
//         </View>
//       </View>
//     </PopupModal>
//   );
// };

// export default App;








import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MyButton, MyText, PopupModal } from '@components'
import { MY_COLORS } from '@constants';

const App = () => {
  const [isSelected, setIsSelected] = useState('yes');
  return (
    <View>
      <PopupModal isVisible={true} onClose={() => { }}>
        <MyText color='white'>Are you sura to complete this task</MyText>
        <View style={{ flexDirection: 'row', gap: 10, }}>
          <MyButton
            onPress={() => { setIsSelected('yes') }}
            title='Yes'
            style={{
              flex: 1,
              backgroundColor: isSelected === 'yes' ? 'white' : MY_COLORS.PRIMARY,
              borderColor: isSelected === 'yes' ? 'transparent' : 'white',
              borderWidth: 1
            }}
            btnType={isSelected === 'yes' ? 'white' : 'secondary'}
          />
          <MyButton
            onPress={() => { setIsSelected('cancel') }}
            title='Cancel'
            style={{
              flex: 1,
              backgroundColor: isSelected === 'cancel' ? 'white' : MY_COLORS.PRIMARY,
              borderColor: isSelected === 'cancel' ? 'transparent' : 'white',
              borderWidth: 1
            }}
            btnType={isSelected === 'cancel' ? 'white' : 'secondary'}
          />

        </View>
      </PopupModal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})