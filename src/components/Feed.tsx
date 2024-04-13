import React from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import FeedItem from './FeedItem';

const Feed: React.FC = () => {
  const feedData = [
    {
      id: '1',
      title: 'Neymar Jr ao bater recorde do rei pelé e ampliar o record para 72 gols com a amarelinha.',
      description: 'Record estabelecido por rei pelé a anos, foi quebrado hoje, neymar comemorou ala rei.',
      imageUrl: 'https://s2-gshow.glbimg.com/7y58EiM_GRcmecjm0d6itWLa3nM=/0x0:1409x1931/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/6/m/OcPBGmStCLCW9W3bJIFA/2023-09-09t021742z-312072978-up1ej9906dguj-rtrmadp-3-soccer-worldcup-bra-bol-report.jpg',
      likes: 3453943249240,
    },
    {
      id: '2',
      title: 'Grêmio Campeão Gaucho 2024',
      description: 'Ta virando rotina.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-YfKC6F_PBon5bRAURZislAOS0xQVimPKMD2jGXIYQ&s',
      likes: 102329232,
    },
    {
      id: '3',
      title: 'Vitoria de Barcelona fora de casa contra PSG.',
      description: 'Rafhinha solta o verbo "Vão ter que me engolir".',
      imageUrl: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/psg-barcelona-champions-league-1-e1712781969722.jpeg?w=732&h=412&crop=1',
      likes: 21313432435,
    },
  ];

  const windowWidth = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: windowWidth }]}>
      <Header
        placement="center"
        centerComponent={{ text: '𝐒𝐏𝐎𝐑𝐓𝐒 𝐍𝐄𝐖𝐒', style: {color: '#fff', fontSize: 24, fontWeight: 'bold', marginTop: 40 } }}
        rightComponent={<Icon name="user" type="font-awesome" color="#fff" style={styles.profileIcon} />}
        containerStyle={styles.header}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {feedData.map((item) => (
          <FeedItem
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            likes={item.likes}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    backgroundColor: '#2f95dc',
    borderBottomWidth: 0,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  profileIcon: {
    marginTop: 40,
    marginRight: 20,
  },
});

export default Feed;
