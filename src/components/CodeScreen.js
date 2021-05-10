import React from "react";
import '../css/codescreen.css';

function CodeScreen() {
  return (
    <div>
      <div className="container-fluid" style={{backgroundColor:'#262335'}}> 
        <p className="text-secondary">
          salihgenc.com &gt; src &gt; components &gt; mainpage.js
        </p>
        <div className="row">
          <div className="col-1">
            {/* <p className="text-secondary fw-bold ms-5 linenumber">
              1 <br/>2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
              10
              <br />
              11
              <br />
              12
              <br />
              13
              <br />
              14
              <br />
              15
              <br />
              16
              <br />
              17
              <br />
              18
              <br />
              19
              <br />
            </p> */}

            <ul className="text-secondary list-unstyled ms-4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
            </ul>
          </div>

          <div className="col-10">
            <h6 className="text-white d-inline"><span className="green">import </span>
            <span className="pink">React </span>
            <span className="yellow">from </span>
            <span className="orange">'react'</span>
          </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeScreen;
