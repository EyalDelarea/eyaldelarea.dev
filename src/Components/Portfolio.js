import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage =  projects.image;

   

      return (
        <div key={id++} className="columns portfolio-item">
          <a
            href={projects.url}
            target={"_blank"}
            className="item-wrap"
            rel="noreferrer"
          >
            <img alt={projects.title} src={projectImage} style={{
              width:'200px',
              height: '150px',
              objectFit:'cover',
              borderRadius:'10%'
            }} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </a>
        </div>
      );
    });

  

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <a
                href={"sss"}
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </a>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
