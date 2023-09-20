import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(el => {
        const { id, avatar, name, isOnline } = el;
        return (
          <li key={id} className="item">
            <span className="status"></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {};

export default FriendList;
