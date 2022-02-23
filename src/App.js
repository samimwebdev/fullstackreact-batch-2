import TopBar from './TopBar'
import Content from './Content'
import SideBar from './Sidebar'
import Footer from './Footer'

import './style.css'

const App = () => {
  return (
    <div className='page'>
      <TopBar />
      <Content />
      <SideBar />
      <Footer />
    </div>
  )
}

export default App
