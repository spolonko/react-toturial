import React from "react";

const Linktree = () =>{
    return (
    <>
        <div className="links-container">
          <div className="twitter-link">
            <a href="https://twitter.com/EccentricIshaku" id="twitter_link">
              Twitter Link
            </a>
          </div>
          <br />
          <br />
          <div className="zuri-team">
            <a href="https://training.zuri.team/" id="btn_zuri">
              Zuri Team
            </a>
          </div>
          <br />
          <br />
          <div className="zuri-books">
            <a href="https://books.zuri.team" id="books">
              Zuri Books
            </a>
            <span className="subtexts">Get these complete and well-detailed books on design and coding</span>
          </div>
          <br />
          <br />
          <div className="python-books">
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=<Yusuf>"
              id="book_python"
            >
              Python for Beginners
            </a>
          </div>
          <br />
          <br />
          <div className="pitch">
            <a href="https://background.zuri.team" id="pitch">
              Get to know the developers you'll be working with on your next project!
            </a>
          </div>
          <br />
          <br />
          <div className="book-design">
            <a href="https://books.zuri.team/design-rules" id="book_design">
             This free design book is just what you need!
            </a>
          </div>
        </div>
    </>
    );
};
export default Linktree;