
import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import AppHeader from './component/common/AppHeader';
import AppHome from './views/AppHome';
import { Footer } from 'antd/lib/layout/layout';

import AppFooter from './component/common/AppFooter';

const { Header,Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppHome />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
  );
}

export default App;
