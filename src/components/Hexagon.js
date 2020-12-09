import React from "react";
import "./CSS/Hexagon.css";
import { BiWrench } from "react-icons/bi";

export function Hexagon() {
  return (
    <div className='hexagon-wrapper'>
      <div className="hexagon">
        <div className="grid1 gridAll">
          <div className="inner">
            <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid2 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid3 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid4 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid5 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid6 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid7 gridAll">
          <div className="inner">
          <BiWrench className='wrench'/>
          </div>
        </div>

        <div className="grid8 ">
          <div>
            <p>
              Sitecore
              <br />
              Support
            </p>
          </div>
        </div>

        <div className="grid9 ">
          <div>
            <p>
              Sitecore <br />
              Implementation
            </p>
          </div>
        </div>

        <div className="grid10 ">
          <div>
            <p>
            Sitecore <br />
            Training
            </p>

          </div>
        </div>

        <div className="grid11 ">
          <div>
            <p>
            Sitecore <br />
            Support
            </p>

          </div>
        </div>

        <div className="grid12 ">
          <div>
            <p>
            Managed <br />
            Services
            </p>

          </div>
        </div>

        <div className="grid13 ">
          <div>
            <p>
            Experience <br />
            Marketing <br />
            Design
            </p>

          </div>
        </div>

        <div className="grid14 ">
          <div>
            <p>
            Sitecore <br />
            Audit
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}
