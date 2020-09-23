import React, { Component } from 'react';
import './Body.scss';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <AboutMe />
        <Education />
      </div>
    );
  }
}

function AboutMe() {
  return (
    <div>
      <h3>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
        amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
        Quasi.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3>EDUCATION</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <h2>1990</h2>
            </td>
            <td>
              <h2>I was born in Katowice</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, exercitationem, totam, dolores iste,dolore est aut
                modi.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>2005</h2>
            </td>
            <td>
              <h2>Secondary school specializing in artistic</h2>
              <p>
                Eos, explicabo, nam, tenetur et ab elus deserunt aspernatur
                ipsum ducimus quibusdam quis voluptatibus.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>2009</h2>
            </td>
            <td>
              <h2>First level graduation in Graphic Design</h2>
              <p>
                Aspernatur, mollitia, quos maxime eius suscipit sed beatae
                ducimus quaerat quibusdam perferendls? lusto, quibusdam
                asperiores unde repellat.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>2012</h2>
            </td>
            <td>
              <h2>Second level graduation in Graphic Design</h2>
              <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Body;
