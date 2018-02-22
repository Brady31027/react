var person = {
  name: 'Brady Cheng',
  location: 'Sunnyvale, CA',
  occupation: {
    title: 'Software Engineer',
    employer: 'OJSB Studio'
  },
  photo: './images/android.png',
  updates: [
    {
      platform: 'facebook',
      status: 'post from Facebook'
    },
    {
      platform: 'twitter',
      status: 'post from Twitter'
    },
    {
      platform: 'snapchat',
      status: 'post from Snapchat'
    }
  ]
}

class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.src} alt="Photo" />
      </div>
    );
  }
}

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1 className="name">{this.props.prop.name}</h1>
        <h2 className="location">{this.props.prop.location}</h2>
        <div className="occupation">
         <p>{this.props.prop.occupation.title}@
            {this.props.prop.occupation.employer}</p>
        </div>
      </div>
    );
  }
}

class Updates extends React.Component {

  getUpdates() {
    return this.props.posts.map((post, index)=> {
      return (
        <li className={"update " + post.platform} key={index}> {index}: {post.status}</li>    
      )
    });
  }

  render () {
    return (
      <div className="updates">
        <ul>
          {this.getUpdates()}
        </ul>
      </div>
    );
  }
}

class Card extends React.Component {
  render () {
    return(
      <div className="card">
        <Photo src={person.photo}/>
        <Bio prop={person}/>
        <Updates posts={person.updates}/>
      </div> 
    );
  }
}

ReactDOM.render(
      <Card /> , document.getElementById('app')
);