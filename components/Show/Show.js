import React , {Component} from 'react';
import {ART ,StyleSheet,Text,SectionList, View, ScrollView} from 'react-native';
import ShowCircle from './ShowCircle';
import ShowNodes from './ShowNodes';
import ShowDetails from './ShowDetails';

export default class Show extends Component{
    static navigationOptions = {
        title: 'Login',
            header : null ,
    }
    
    constructor(props) {
        super(props);        
        const { navigation } = this.props;

        this.state={
            raduis: parseInt( navigation.getParam('raduis',0)),
            totalNodeNumber: parseInt( navigation.getParam('totalNodeNumber',0)),
            isAuthenticated: navigation.getParam('isAuthenticated',NaN),
            uid: navigation.getParam('uid',NaN) ,
        }
        const {
            Circle ,
            Group,
        } = ART ;
    
    }
            // calcul the number of rings in function of the raduis 
    calculRingNumber = (r) => {
        
        if (r  < 50 )
            return (1)
        else if ( r <= 100 )
            return ( 2 )
        else if ( r <= 250)
            return ( 3 )
        else if ( r <= 500)
            return ( 4 )
        else if ( r <= 750)
            return ( 8 )
        else 
            return ( 9 )
           
    }


    // Width of a ring
    calculRingWidth = (raduis , ringNumber) => {
        return (raduis/ringNumber) ;
    }


    //Number of Node per Ring
    calculNumberNodeRing = ( totalNodeNumber , ringNumber ) => {

        var num = [0];
        for (i=1;i<= ringNumber; i++ ){
            num.push((2*i -1)*totalNodeNumber/ringNumber/ringNumber)
        }        
        console.log('==== Number of Node per Ring ====');

            num.forEach(function(item , index , array){
                console.log(index, Math.round(item))
                });
                return (num);
            
    }


// Optimal Number of Cluster in a Ring
    calculNumberClusterRing = (num ,ringNumber, raduis) => {
        var mOpt = [0];
        mOpt.push((
            Math.sqrt(num[1]/2/1757.8125)*raduis
        ));
        for(i=2 ;i<= ringNumber ; i++)
            mOpt.push((Math.sqrt(
                (9*num[i]*(i*i+(i-1)*(i-1))*(2*i-1)*(2*i-3))/(2*(42*(i-1)*(i-1)-17))
            )));
            console.log('==== Optimal Number of Cluster in a Ring ====');
            mOpt.forEach(function(item , index , array){
                console.log(index, Math.round(item))
                });
                return (mOpt);
    }
// Optimal Raduis of Cluster in a Ring
    calculRaduisCluster = (ringWidth , mOpt,ringNumber) =>{
        var rOpt = [0];
        rOpt.push(ringWidth*Math.sqrt(3/mOpt[1]));
        for(i=2 ;i<= ringNumber ; i++)
        rOpt.push((Math.sqrt(
            ringWidth*Math.sqrt((2*i - 1 )/mOpt[i])

            )));
        console.log('==== Optimal Raduis of Cluster in a Ring ====');
        rOpt.forEach(function(item , index , array){
            console.log(index, (item))
            });
            return (rOpt);
    }
    
    render()
    {

        let ringNumber = this.calculRingNumber(this.state.raduis);
        let ringWidth = this.calculRingWidth(this.state.raduis,ringNumber);
        let numberNodeRing = this.calculNumberNodeRing(this.state.totalNodeNumber ,ringNumber);
        let numberClusterRing  = this.calculNumberClusterRing(numberNodeRing , ringNumber,this.state.raduis)
        let raduisCluster = this.calculRaduisCluster(ringWidth,numberClusterRing,ringNumber);
        console.log("show uid = "+this.state.uid)
        return(
            <View
                style ={{
                flex: 1 ,
              }}
              >
                <ScrollView
                style ={{
                flex: 1 ,
                }}
                >
                    <ShowCircle  />
                    <SectionList
                        sections={[
                        {title: 'number of rings' , data: [ringNumber] },
                        {title: 'Width of a ring' , data:[ringWidth] },
                        {title: 'Number of Node per Ring' , data: numberNodeRing},
                        {title: 'Optimal Number of Cluster in a Ring' , data: numberClusterRing},
                        {title: 'Optimal Raduis of Cluster in a Ring' , data: raduisCluster},
                        ]}
                        renderItem={({item , index}) => <Text style={styles.item}>{index} {item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />                
                </ScrollView>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });