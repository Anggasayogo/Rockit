import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar, 
  Image, 
  View, 
  Text, 
} from 'react-native'
import Images from '../Images'

// Components
import Button from '../Components/Button'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const LaunchScreen = props => {
  const styleTypes = ['default','dark-content', 'light-content'];
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  return (
    <SafeAreaView style={styles.pages}>
      <StatusBar translucent backgroundColor="transparent" barStyle={styleStatusBar} />
      <Image source={Images.logo} style={styles.logo}/>
      <Text style={styles.mainTitle}>Your scooter in one app</Text>
      <Image source={Images.landing} style={styles.heroImage}/>
      <Text style={styles.bottomTitle}>Everything you need to know about your scooter is available here in your app</Text>
      <View style={styles.container}>
        <View style={styles.wrapperDoted}>
          <View style={styles.dotedInActive}/>
          <View style={styles.dotedInActive}/>
          <View style={styles.dotedInActive}/>
          <View style={styles.dotedActive}/>
        </View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Home') } style={styles.wrapperNext}>
          <Image source={Images.next} style={styles.icNext}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
