// import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg'
import './ChatMessage.css'

function ChatMessage({ message, sender, time }) {
  // const {message, sender} = props;
  return (
    <div className={'chat-message-' + sender}>
      {sender === 'robot' && <img src={RobotProfileImage}/>}
      <p>
        {message}
        <br/>
        <span className='message-time'>{time}</span>
      </p>
      {sender === 'user' && <img src={UserProfileImage}/>}
    </div>
  );
}

export default ChatMessage;