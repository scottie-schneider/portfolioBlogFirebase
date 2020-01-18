import Nav from '../components/nav.component';

export default () => (
  <div>
    <Nav />
    <img src="/static/images/scottie512.png" />
    <div className="textInDiv">I am the about page</div>
    <style jsx>{`
      img { 
        height: 500px;
      }
      .textInDiv {
        color: red;
        font-size: 25px;
      }
    `}</style>
  </div>
)


