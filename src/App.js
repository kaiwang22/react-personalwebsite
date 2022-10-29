
import './App.css';
import Header from './components/header.js'
import Interests from './components/interests.js'
import Resume from './components/resume.js'
import subHeader from './components/subheader.js'

function App() {
  return (
    <div id = "page-container">
      <div class="page-body">
        <Header name = "Kai Wang"> </Header>
        <subHeader subname = "26"> </subHeader>
        <p>hi! my name is kai! I'm currently a freshman at the university of pennsylvania studying systems science and engineering (and currently thinking about a computer science minor)! 
                        here are some of my interests:</p>
        <Interests interest = "entrepreneurship"> </Interests>
        <Interests interest = "data science"> </Interests>
        <Interests interest = "marine biology (sharks!)"> </Interests>
        <Interests interest = "decision science"> </Interests>
        <Interests interest = "international jazz!"> </Interests>
        <Interests interest = "jewelry shopping"> </Interests>
        <p>things not on my resume...:</p>
        <Resume resume = "beat my peanut + almond allergy of 18 years"> </Resume>
        <Resume resume = "can slightly wiggle my ears"> </Resume>
        <Resume resume = "I have a lightning bolt scar on my right hand"> </Resume>
        <Resume resume = "I've only lost money in the stock market"> </Resume>
        <div class = "links">
          <a href="https://github.com/kaiwang22">github</a>
          <a href="https://www.linkedin.com/in/kai-wang-2b6a631b5/">linkedin</a>
          </div>
      </div>
      <div class="page-header">
                   <div class="page-header-pic">
                    <img src="kaiselfie.JPG" alt="kaiselfie" />
                   </div>
      </div>
    </div>
  );
}

export default App;
