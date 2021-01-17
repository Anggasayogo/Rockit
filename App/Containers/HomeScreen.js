import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, StatusBar, Image, View, FlatList } from 'react-native'
import Images from '../Images'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const HomeScreen = props => {
  const styleTypes = ['default','dark-content', 'light-content'];
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[1]);
  const [menu,setMenu] = useState([
    {
      id: 1,
      name: "Total Distance",
      icon: Images.menuMaps,
      data: "17,9 Km"
    },
    {
      id: 2,
      name: "Total Battery",
      icon: Images.menuCahrging,
      data: "100%"
    },
    {
      id: 3,
      name: "Average Speed",
      icon: Images.menuFast,
      data: "45 Km/h"
    },
    {
      id: 4,
      name: "Ride Updated",
      icon: Images.menuUpdate,
      data: "1 day ago"
    },
  ])

  const RenderMenu = ({item})=>{
    return(
      <View style={styles.card}>
        <Text style={styles.titleCard}>{item?.name}</Text>
        <Image source={item?.icon} style={styles.icon}/>
        <Text style={styles.data}>{item?.data}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.pages}>
      <StatusBar translucent backgroundColor="transparent" barStyle={styleStatusBar} />
      <View style={styles.containerProfile}>
        <View style={styles.childContainerProfile}>
          <Image source={Images.icProfile} style={styles.icProfile} />
          <View style={apply("ml-2")}>
            <Text style={styles.title}>Withney Leon</Text>
            <Text style={styles.action}>Welcome Back!</Text>
          </View>
          <View style={styles.childDrawable}>
            <Image source={Images.icUnion} style={styles.icDrawable}/>
          </View>
        </View>
      </View>
      <Image source={Images.bgMain} style={styles.mainApp}/>
      <View style={styles.containerLocked}>
        <View style={styles.childLabel}>
          <Text style={styles.titleMain}>Whitney’s Scooter</Text>
          <Text style={styles.lockeds}>Locked</Text>
        </View>
        <View style={styles.warpperIconLock}>
          <Image source={Images.icLock} style={styles.lock}/>
        </View>
      </View>
      <FlatList
        data={menu}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=> <RenderMenu item={item}/> }
        numColumns={2}
        style={apply("mb-3")}
      />
    </ScrollView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
