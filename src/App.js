import './App.css';
import Card from './card';
import Cdata from './Cdata';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Here are some of the Amazon Prime web series
        </p>
      </header>
      <div>
      {Cdata.map((val) => {
              return (
                  <Card
                key = {val.key}
                imgsrc = {val.imgsrc}
                ctitle = {val.ctitle}
                alternate = {val.alternate}
                refer = {val.refer}
            />
            );
        })}
        
       <footer>
          <Footer />
       </footer>

      </div>
    </div>
  );
}

export default App;
