import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  homeContent: {
    height: '100%',
    padding: 16,
  },
  homeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  usernameText: {
    fontWeight: 'bold',
    opacity: 0.3,
  },  
  usernameText: {
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize: 14,
  },
  definiton: {
    marginBottom: 20
  },
  greetings: {fontSize: 17, fontWeight: 'bold'},
  profilePic: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
  profilePicWrapper: {
    borderColor: '#CECECE',
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  searchContainer: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 60,
  },
  searchInput: {
    width: '85%',
    height: 40,
    fontSize: 15,
    backgroundColor: '#ececec',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingLeft: 15,
    paddingRight: 5,
  },
  searchButton: {
    backgroundColor: '#31A854',
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 15.5,
    opacity: 0.9,
    marginBottom: 10,
  },
  scrollViewContent: {
    // paddingBottom: 40,
  },
  container: {
    display: 'flex',
  },
  section: {
    display: 'flex',
    marginBottom: 50,
  },
  sectionScrollContainer: {
    paddingVertical: 1,
    paddingHorizontal: 1,
  },
  done: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 0
    },
    backgroundColor:"#4793d6"
  },
  between: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  }
});

export default styles;
