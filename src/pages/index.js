import { Layout } from '../components/Layout/Layout';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Welcome from '../components/Welcome/Welcome';
import History from '../components/History/History';

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Projects />
      <Technologies />
      {/* <History /> */}
    </Layout>
  )
}
