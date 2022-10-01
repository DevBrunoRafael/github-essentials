import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import {
  Container,
  Header,
  Avatar,
  Login,
  Name,
  Inner,
  Data,
  User,
  Link,
} from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <User>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </User>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>
          &nbsp;&middot;&nbsp;
          {user.followers}&nbsp;<i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
        )}
        {user.company && (
          <Data>
            <MdLocationCity size={20} /> {user.location}
          </Data>
        )}
        {user.company && (
          <Data>
            <MdLink size={20} />
            <Link href={`\\${user.blog}`} target="_blank">
              {user.blog}
            </Link>
          </Data>
        )}
      </Inner>
    </Header>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
