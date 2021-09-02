import styles from './App.module.scss'
import { Link, useLocation } from 'react-router-dom'
import Tabs, { Tab } from './components/Tabs'
import Page from './components/Page'
import Routes from 'routes/routes'
import GlobalLoading from 'components/GlobalLoading'
import { useRunningSession } from 'features/SessionsList/hooks'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const location = useLocation()
  const { isLoading } = useRunningSession()
  const { isLoading: isLoadingAuth } = useAuth0()

  if (isLoading || isLoadingAuth) {
    return <GlobalLoading />
  }

  return (
    <Page className={styles.APP}>
      <Tabs selected={location.pathname} tabComponent={Link}>
        <Tab label="sessions" value="/" to="/"></Tab>
        <Tab label="Stats" value="/stats" to="/stats"></Tab>
      </Tabs>
      <Routes />
    </Page>
  )
}

export default App
