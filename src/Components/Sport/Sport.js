import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Sport = () => {
  const [StoreData, setStoreData] = useState([]);
  const [DropdownData, setDropdownData] = useState("");
  const [SearchData, setSearchData] = useState("");
  useEffect(() => {
    axios
      .get("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((data) => setStoreData(data.data.playerList))
      .catch((err) => console.error(err));
  }, []);

  const selectDropdown = (e) => {
    setDropdownData(e.target.value);
  };
  const Capturetext = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className='Sportapp'>
      <select onChange={selectDropdown} id='colours'>
        <option value='Select'>Select</option>
        <option value='TName'>Team Name</option>
        <option value='PFName'>Player Name</option>
      </select>
      <input type='text' onChange={Capturetext} name='search' id='' />
      <br />
      {StoreData.map((data, index) => {
        if (DropdownData === "Select") {
          return (
            <div key={index}>
              <div>Player Name : {data.PFName}</div>
              <div>SkillSet : {data.SkillDesc}</div>
              <div>
                Next Match :
                {data.UpComingMatchesList.map((data) => {
                  return (
                    <div>
                      {data.CCode} vs {data.VsCCode}
                    </div>
                  );
                })}
              </div>
              <div>
                Match Time :
                {data.UpComingMatchesList.map((data) => {
                  return (
                    <div>
                      {moment
                        .utc(data.MDate)
                        .local()
                        .format("DD-MM-YYYY h:mm:ss a")}
                    </div>
                  );
                })}
              </div>
              <img
                src={require(`../../player-images/${parseInt(data.Id)}.jpg`)}
                alt=''
              />
              <hr />
            </div>
          );
        } else if (DropdownData === "TName") {
          if (data.TName.toLowerCase().includes(SearchData.toLowerCase())) {
            return (
              <div key={index}>
                <div>Player Name : {data.PFName}</div>
                <div>SkillSet : {data.SkillDesc}</div>
                <div>
                  Next Match :
                  {data.UpComingMatchesList.map((data) => {
                    return (
                      <div>
                        {data.CCode} vs {data.VsCCode}
                      </div>
                    );
                  })}
                </div>
                <div>
                  Match Time :
                  {data.UpComingMatchesList.map((data) => {
                    return (
                      <div>
                        {moment
                          .utc(data.MDate)
                          .local()
                          .format("DD-MM-YYYY h:mm:ss a")}
                      </div>
                    );
                  })}
                </div>
                <img
                  src={require(`../../player-images/${parseInt(data.Id)}.jpg`)}
                  alt=''
                />
                <hr />
              </div>
            );
          }
        } else if (DropdownData === "PFName") {
          if (data.PFName.toLowerCase().includes(SearchData.toLowerCase())) {
            return (
              <div key={index}>
                <div>Player Name : {data.PFName}</div>
                <div>SkillSet : {data.SkillDesc}</div>
                <div>
                  Next Match :
                  {data.UpComingMatchesList.map((data) => {
                    return (
                      <div>
                        {data.CCode} vs {data.VsCCode}
                      </div>
                    );
                  })}
                </div>
                <div>
                  Match Time :
                  {data.UpComingMatchesList.map((data) => {
                    return (
                      <div>
                        {moment
                          .utc(data.MDate)
                          .local()
                          .format("DD-MM-YYYY h:mm:ss a")}
                      </div>
                    );
                  })}
                </div>
                <img
                  src={require(`../../player-images/${parseInt(data.Id)}.jpg`)}
                  alt=''
                />
                <hr />
              </div>
            );
          }
        } else {
          return (
            <div key={index}>
              <div>Player Name : {data.PFName}</div>
              <div>SkillSet : {data.SkillDesc}</div>
              <div>
                Next Match :
                {data.UpComingMatchesList.map((data) => {
                  return (
                    <div>
                      {data.CCode} vs {data.VsCCode}
                    </div>
                  );
                })}
              </div>
              <div>
                Match Time :
                {data.UpComingMatchesList.map((data) => {
                  return (
                    <div>
                      {moment
                        .utc(data.MDate)
                        .local()
                        .format("DD-MM-YYYY h:mm:ss a")}
                    </div>
                  );
                })}
              </div>
              <img
                src={require(`../../player-images/${parseInt(data.Id)}.jpg`)}
                alt=''
              />
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Sport;
