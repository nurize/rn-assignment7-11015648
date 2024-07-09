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
    columnGap: 80,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '50%',
    marginRight: 10,
  },
  galleryItem: {
    width: '118%',
    height: '120%',
    flex: 1,
    padding: 5,
    marginBottom: 37,
  },
  addButton: {
    alignSelf: 'flex-end', 
    marginTop: 180,  
    width: 30, 
    height: 30,
    marginLeft: 80,
  },
  itemName: {
    fontSize: 20,
    letterSpacing: 1
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
});

export default styles;