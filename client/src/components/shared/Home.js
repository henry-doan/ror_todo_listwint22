import Features from "./Features";
import MainHead from "./MainHead";
import Prices from "./Prices";
import "../styles/Main.css";

export const styles = {
  prettyBtn: {
    color: 'purple',
    fontSize: '32px',
    border: '1px dotted grey',
  },
  uglyBtn: {
    color: 'orange',
    fontSize: '12px',
    border: '1px dotted yelloq',
  }
}

const Home = () => (
  <>
    <MainHead title={"Welcome to TodoList!"} />
    <Features />
    <button>Click</button>
    <button className='pretty-btn'>Click</button>
    <button style={{ color: 'green', fontSize: '24px', border: '1px solid brown'}}>Click</button>
    <button style={styles.prettyBtn}>Click</button>
    <button style={styles.uglyBtn}>Click</button>
    <Prices />
  </>
)

export default Home;