import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@emotion/react';
import Constants from 'expo-constants';

import { Typography } from '../../components/atoms/Typography';
import { AboutContainer, SocialLinks } from './styles';
import { Linking, TouchableOpacity } from 'react-native';

export const About = () => {
  const theme = useTheme();

  return (
    <AboutContainer>
      <Typography variant="body-1">
        Achou um bug ou tem alguma sugestão?
      </Typography>
      <SocialLinks>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com/datFranky')}
        >
          <Svg
            width="32"
            height="28"
            viewBox="0 0 40 33"
            fill="none"
            style={{ marginHorizontal: 12 }}
          >
            <Path
              d="M40 3.97656C38.5283 4.62926 36.9466 5.07038 35.2866 5.26878C36.981 4.25309 38.2822 2.64484 38.8949 0.728601C37.3093 1.66894 35.553 2.35192 33.6837 2.72004C32.1867 1.1251 30.0539 0.128433 27.6936 0.128433C23.1613 0.128433 19.4869 3.80274 19.4869 8.33473C19.4869 8.97792 19.5596 9.60427 19.6995 10.2049C12.879 9.86266 6.83214 6.59553 2.78459 1.63061C2.0782 2.84265 1.67351 4.25236 1.67351 5.75629C1.67351 8.60336 3.12243 11.1152 5.32441 12.5868C3.97908 12.5443 2.71378 12.1751 1.60723 11.5605C1.60664 11.5947 1.60664 11.6291 1.60664 11.6636C1.60664 15.6398 4.43542 18.9566 8.18962 19.7104C7.50093 19.898 6.77596 19.9982 6.02743 19.9982C5.49866 19.9982 4.98453 19.9469 4.48356 19.851C5.52778 23.1114 8.55847 25.484 12.1495 25.5503C9.34094 27.7512 5.80241 29.0632 1.95764 29.0632C1.29529 29.0632 0.642013 29.0244 0 28.9487C3.63173 31.277 7.94543 32.6355 12.5798 32.6355C27.6745 32.6355 35.9287 20.1308 35.9287 9.28634C35.9287 8.93051 35.9208 8.57658 35.905 8.22471C37.5083 7.06768 38.8997 5.62227 40 3.97656Z"
              fill={theme.colors.text}
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/rafaelgiro')}
        >
          <Svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{ marginHorizontal: 12 }}
          >
            <Path
              d="M16.0001 0C7.16466 0 0 7.16334 0 16.0001C0 23.0694 4.58452 29.0669 10.9419 31.1826C11.7415 31.3307 12.0351 30.8355 12.0351 30.4129C12.0351 30.0314 12.0202 28.771 12.0133 27.434C7.56209 28.4019 6.62283 25.5462 6.62283 25.5462C5.89499 23.6968 4.8463 23.2051 4.8463 23.2051C3.39461 22.212 4.95573 22.2324 4.95573 22.2324C6.56242 22.3453 7.40842 23.8812 7.40842 23.8812C8.83547 26.3273 11.1514 25.6201 12.0645 25.2113C12.2081 24.1772 12.6227 23.4713 13.0803 23.0718C9.52648 22.6672 5.7906 21.2953 5.7906 15.1645C5.7906 13.4176 6.41563 11.9903 7.43916 10.8698C7.27303 10.4668 6.72537 8.83945 7.59415 6.63555C7.59415 6.63555 8.93774 6.20552 11.9953 8.27562C13.2716 7.92111 14.6404 7.74332 16.0001 7.73723C17.3599 7.74332 18.7297 7.92111 20.0084 8.27562C23.0623 6.20552 24.404 6.63555 24.404 6.63555C25.2749 8.83945 24.727 10.4668 24.5608 10.8698C25.5868 11.9903 26.2075 13.4176 26.2075 15.1645C26.2075 21.3098 22.4645 22.663 18.9017 23.0591C19.4756 23.5556 19.9869 24.5293 19.9869 26.0221C19.9869 28.1629 19.9684 29.8859 19.9684 30.4129C19.9684 30.8387 20.2564 31.3376 21.0674 31.1805C27.4213 29.0624 32 23.067 32 16.0001C32 7.16334 24.8364 0 16.0001 0Z"
              fill={theme.colors.text}
            />
          </Svg>
        </TouchableOpacity>
      </SocialLinks>
      <Typography variant="label" style={{ marginTop: 8, opacity: 0.4 }}>
        Versão :{Constants.manifest?.version}
      </Typography>
    </AboutContainer>
  );
};
