import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import dotEnv from 'dotenv';

dotEnv.config({ path: '.env.test' })

Enzyme.configure({
  adapter: new Adapter()
});
