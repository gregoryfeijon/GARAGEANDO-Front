import {colors} from '~/styles';

const myHeader = navigation => {
  return {
    title: 'GARAGEANDO',
    headerStyle: {
      backgroundColor: colors.backgroundWhite,
    },
    headerTintColor: colors.headerColor,
    headerTitleStyle: {
      fontFamily: 'Verdana',
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf: 'center',
      flexGrow: 1,
    },
  };
};

export default myHeader;
