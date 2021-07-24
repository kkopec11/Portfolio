import { Layout } from '../components/Layout/Layout';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Welcome from '../components/Welcome/Welcome';
import { SectionDivider } from '../styles/components/globalComponents';

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Projects />
      <Technologies />
      {/* <Timeline /> */}
    </Layout>
  )
}
