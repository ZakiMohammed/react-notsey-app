import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import Empty from './components/Empty';

function App() {
  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <Form />
            <List />
            <Empty />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
