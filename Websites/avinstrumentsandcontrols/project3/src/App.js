import './App.css';
import landing from '../src/imgs/landing.JPG';

function App() {
  return (
    <>
      <div className="container-fluid">
        <p className='text-center px-0'>
          <img src={landing} className='img-fluid' alt="" />
        </p>
        <div className="row py-2">
          <div className="col">
            <p>
              This is the Ultimate place to get Precise Calibration tools
            </p>
          </div>
          <div className="col">College</div>
        </div>
        <div className="row py-2">
          <div className="col md-2">Hello</div>
          <div className="col">bennji</div>
          <div className="col">So </div>
          <div className="col">How</div>
          <div className="col">Have</div>
          <div className="col">you</div>
          <div className="col">Been</div>
          <div className="col">Since</div>
          <div className="col">You</div>
          <div className="col">Topped</div>
          <div className="col">in</div>
          <div className="col">College</div>
        </div>
      </div>
    </>
  );
}

export default App;
