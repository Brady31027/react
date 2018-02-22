var person = {
  name: 'Brady Cheng',
  location: 'Sunnyvale, CA',
  occupation: {
    title: 'Software Engineer',
    employer: 'OJSB Studio'
  },
  photo: './images/android.png',
  updates: [{
    platform: 'facebook',
    status: 'post from Facebook'
  }, {
    platform: 'twitter',
    status: 'post from Twitter'
  }, {
    platform: 'snapchat',
    status: 'post from Snapchat'
  }]
};

class Photo extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.src, alt: 'Photo' })
    );
  }
}

class Bio extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.prop.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.prop.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.prop.occupation.title,
          '@',
          this.props.prop.occupation.employer
        )
      )
    );
  }
}

class Updates extends React.Component {

  getUpdates() {
    return this.props.posts.map((post, index) => {
      return React.createElement(
        'li',
        { className: "update " + post.platform, key: index },
        ' ',
        index,
        ': ',
        post.status
      );
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.getUpdates()
      )
    );
  }
}

class Card extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { src: person.photo }),
      React.createElement(Bio, { prop: person }),
      React.createElement(Updates, { posts: person.updates })
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));