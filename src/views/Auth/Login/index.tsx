import { Col } from 'antd';
import { media } from '../../../shared/assets';
import LoginForm from './LoginForm';
import './Login.scss';

const Login = () => {
  return (
    <div className="wrap">
      <Col span={24} className="form__login center">
        <div className="form__login-container">
          <img className={'logo'} src={media.images.logo} alt="Logo" />
          <LoginForm />
        </div>
      </Col>
    </div>
  );
};

export default Login;
