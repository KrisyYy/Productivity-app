import { SidePanel } from './components/common/SidePanel';
import { Content } from './components/common/Content';

function App() {

  return (
    <div className='h-screen flex flex-row items-stretch'>
      <SidePanel/>
      <Content/>
    </div>
  );
}

export default App;
