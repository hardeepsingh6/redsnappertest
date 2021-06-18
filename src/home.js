import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="content">
          <div>
            <div class="top-back-array">
              <img class="aro" src="Arrow-1.svg" alt="arrow" />
              <label class="aro2">Back</label>
            </div>
            <div class="header-image">
              <img src="header-image.png" alt="headerimg" />
            </div>
            <div></div>
          </div>
          <div class="content-bellow">
            <div class="name-div">
              <label class="name-style">Steve Jobs</label>
              <img src="Moreicon.svg" class="dot-style" alt="arrow" />
              <img src="follow icon.svg" class="follow-icon" alt="arrow" />
              <p class="follow-text">FOLLOW</p>
            </div>
            <div class="space"></div>
            <div class="line"></div>
            <div class="content0">
              <ul class="textul">
                <li>
                  <div class="text1 text">
                    <p class="pgroup">
                      <span>313</span> <br /> PATENTS
                    </p>
                  </div>
                </li>
                <li>
                  <div class="text1 text2">
                    <p class="pgroup">
                      <span>1M 50k </span>
                      <br /> FOLLOWER
                    </p>
                  </div>
                </li>
                <li>
                  <div class="text1 text3">
                    <p class="pgroup">
                      <span>361 </span>
                      <br /> FOLLOWING
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="line"></div>
            <p id="cattext">CATEGORIES</p>
            <div class="submanue">
              <p class="manutext">Electronic Devices</p>
              <img class="manuarrow" src="Arrow.svg" alt="arrow" />
            </div>
            <div class="line"></div>
            <div class="submanue">
              <p class="manutext">Design</p>
              <img class="manuarrow" src="Arrow.svg" alt="arrow" />
            </div>
            <div class="line"></div>
            <div class="submanue">
              <p class="manutext">Transportation</p>
              <img class="manuarrow" src="Arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
