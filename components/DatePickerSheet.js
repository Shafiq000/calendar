// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { BottomSheetView, BottomSheetBackdrop, } from '@gorhom/bottom-sheet';
// const DatePickerSheet = () => {
//   // ref
//   // const bottomSheetRef = useRef<BottomSheet>(null);
//   const snapPoints = useMemo(() => ['75%', '90%'], []);
//   // callbacks
  
//   const renderBackdrop = useCallback((item) => (
//     <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...item} />
//   ));
//     const handleSheetChanges = (index) => {
//     if (index === -1) {
      
      
//     }
//   };
//   // renders
//   return (
//     <View style={styles.container}>
//       <BottomSheet
//         // ref={bottomSheetRef}
//         onChange={handleSheetChanges}
//         index={1}
//           snapPoints={snapPoints}
//           backdropComponent={renderBackdrop}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default DatePickerSheet;