import logo from './logo.svg';
import './App.css';
import { AiOutlineDown } from "react-icons/ai"
import { AiTwotoneFilter } from "react-icons/ai"


function App() {
  return (
    <>
      <body>
        <header id='body'>
          <div id='nav'>
            <div class="logo1">EDYODA</div>
            <p class="dropdown">Explore Categories</p>
            <div id='icon'><a id='lIcon'>< AiOutlineDown /></a>
            </div>
            <h5 id='hed'>EdYoda is a learning and knowledge
              sharing platform for techies</h5>


            <button class="website_btn">Go To Main Website</button>
          </div>
          <p class="logo_stories">Stories</p>
        </header>
        <section class="category">
          <h5 class="ftr"><AiTwotoneFilter />Filter by category</h5>
          <button class="btn1"><a href="#" class="btn">All</a></button>
          <button class="btn1"><a href="#" class="btn">artificial inteligence</a></button>
          <button class="btn1"><a href="#" class="btn">cloud computing</a></button>
          <button class="btn1"><a href="#" class="btn">devops</a></button>
          <button class="btn1"><a href="#" class="btn">programming language</a></button>
          <button class="btn1"><a href="#" class="btn">mobile Application development</a></button>
          <button class="btn1"><a href="#" class="btn">Technology and tools</a></button>
          <button class="btn1"><a href="#" class="btn">get a job in a tech company</a></button>
          <button class="btn1"><a href="#" class="btn">Others</a></button>
        </section>
        <body class="Ecards">
          <div id='grid'>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png' alt='path wrong'></img>
              </div>
              <div class="tittle">
                <h2>Introduction To A Machine Learning Online Course</h2>
              </div>
              <div class="des">
                <p>We have had an insight into Artificial Intelligence. Well, one of its subfields is machine
                  learning and this introduction. it's time to delve in a little deeper.
                </p>
              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/6.png'></img>
              </div>
              <div class="tittle">
                <h2> Choosing the right platform for your web application development</h2>
              </div>
              <div class="des">
                <p>In today's dynamic world, rapid web application development with a smooth user interface that
                  can, It is important to use consistent.
                </p>
              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/4.png'></img>
              </div>
              <div class="tittle">
                <h2>Impact of Cloud Computing in various industries</h2>
              </div>
              <div class="des">
                <p>Cloud computing has been rapidly gaining pace in the world of information technology. Here's all you need to know about it.</p>
              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/3.png'></img>
              </div>
              <div class="tittle">
                <h2>Challenges of Machine Learning in Big Data Analytics</h2>
              </div>
              <div class="des">
                <p>Machine Learning is a subset of artificial intelligence which is an important part of computer science.
                  The revolution of Big Data promises to transform the way we work.</p>

              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/5.png'></img>
              </div>
              <div class="tittle">
                <h2>Breaking the Myths around Cybersecurity</h2>
              </div>
              <div class="des">
                <p>As the dependency on online platforms is increasing daily, cybersecurity is becoming an important
                  concern for all companies today. </p>
              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/7.png'></img>
              </div>
              <div class="tittle">
                <h2>Importance of Data Backup and Recovery in the IT industry</h2>
              </div>
              <div class="des">
                <p>A business must always introspect the areas where they lack in order to bring about a positive
                  change in the work environment.</p>
              </div>
            </div>
            <div id="cards">
              <div class="image">
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png'></img>
              </div>
              <div class="tittle">
                <h2>What is Web Scraping?</h2>
              </div>
              <div class="des">
                <p>Simply put, web scraping is one of the tools developers use to gather and analyze information
                  from the Internet. Here's all you need to know about it.</p>
              </div>
            </div>
          </div>
        </body>
        <footer>
          <h2 class="fotr"></h2>
        </footer>
      </body>

    </>
  );
}

export default App;
