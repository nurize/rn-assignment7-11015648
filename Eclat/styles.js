import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%',
    paddingBottom: 5,
  },
  homeHeader: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerIcon: {
    width: 35,
    height: 35,
    paddingTop: 10,
  },
  subHeaderText: {
    flexDirection: 'row',
    gap: 5,
    paddingLeft: 10,
  },
  iconBackground: {
    backgroundColor: '#F9F9F9',
    borderRadius: 30,
    width: 55,
    height: 55
  },
  galleryContainer: {
    width: '50%',
    padding: 5,
  },
  galleryItemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  galleryItem: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  addButton: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    margin: 5,
  },
  itemName: {
    fontSize: 20,
    letterSpacing: 1,
    marginVertical: 5,
  },
  itemDescription: {
    fontSize: 15,
    color: '#708090',
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 24,
    color: '#F08080'
  },
  drawerUserNm: {
    fontSize: 26,
    textTransform: 'uppercase',
    paddingLeft: 25,
    paddingBottom: 10,
    fontWeight: '200',
    letterSpacing: 6,
  },
  drawerLine: {
    borderColor: '#F08080',
    borderWidth: 1,
    width: '45%',
    marginLeft: 50,
  },
  descriptionText: { 
    color: '#808080', 
    fontSize: 22, 
    paddingHorizontal: 25, 
    paddingVertical: 20 
  }, 
  precautionItem: {
    flexDirection: 'row',
    gap: 15,
    marginHorizontal: 10
  }, 
  precautionText: {
    fontSize: 20,
    color: '#808080'
  }, 
  materialsTitle: {
    fontSize: 28,
    letterSpacing: 3,
    paddingVertical: 10
  },
  detailsHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  }, 
  description: { 
    color: '#808080', 
    fontSize: 22,  
    paddingVertical: 20 ,
    flexWrap: 'wrap'
  }, 
});

export default styles;
