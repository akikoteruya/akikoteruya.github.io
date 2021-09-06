import React, { Component } from "react";


class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <img src={require(`../images/skills_icons/${skills.filename}.png`)} style={{width: "60px"}}/>
                  <p
                    className="text-center"
                    style={{
                      fontSize: "14px",
                      marginTop: "4px",
                      fontFamily: "Raleway",
                    }}
                  >
                    {skills.name}
                  </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <hr />
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
