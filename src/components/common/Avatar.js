import React, { Component } from 'react';
import md5 from 'md5';
import axios from 'axios';
import * as styles from './styles/Avatar.styles';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidImage: false };
    this.imgUrl = '';
  }

  componentDidMount() {
    const { user, fallbackTheme } = this.props;
    const avatarTheme = fallbackTheme || styles.avatarOptions[0];
    this.setUrl(user, avatarTheme);
    this.confirmImageAvailability(user);
  }

  setUrl(user, avatarTheme) {
    if (avatarTheme === 'adorable') {
      this.imgUrl = `https://api.adorable.io/avatars/80/${user.displayName}@adorable.png`;
    } else if(user.displayName === 'Addison') {
      // this.imgUrl = 'https://goo.gl/Fh1gYh';
      this.imgUrl = 'http://www.txstate.edu/cache562dd3409c58daf30a25b4ff19a664e0/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:32b72130-ec02-4f98-8890-1d175fc27f64/Frye%252CJessica.jpg?mode=fit&width=256';
    } else {
      const hash = md5(user.email);
      this.imgUrl = `https://www.gravatar.com/avatar/${hash}?d=${avatarTheme}`;
    }
  }

  confirmImageAvailability(user) {
    if (user.displayName === 'Addison') {
      this.setState({ isValidImage: true });
    } else {
      axios.get(this.imgUrl)
        .then(res => {
          const hasNoImage = res.data.endsWith('KP �&�9    IEND�B`�');
          if (hasNoImage) return Promise.reject('no image');
          this.setState({ isValidImage: true });
        })
        .catch(() => this.setState({ isValidImage: false }));
    }
  }

  render() {
    const {user, size, hasBorder, isDot} = this.props;
    return (
      this.state.isValidImage ?
      <img src={this.imgUrl} alt={user.displayName} style={styles.getAvatarStyle(size, isDot)} /> :
      <div style={styles.getInitialStyle(user, size, hasBorder)}>
        {user.displayName.toUpperCase().substring(0, 1)}
      </div>
    );
  }
}

export default Avatar;
