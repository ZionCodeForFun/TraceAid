import React from "react";
import { Campaigns } from "../global/CampaignCards";
import {
  Container,
  Header,
  Grid,
  Card,
  ProgressBar,
} from "./CampaignDataStyled.jsx";

const CampaignData = () => {
  return (
    <Container>
      <Header>
        <h1>Real Stories. Real Change.</h1>
        <p>See the impact your giving creates in real communities.</p>
      </Header>

      <Grid>
        {Campaigns.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="details">
              <div className="top">
                <span>{item.organization}</span>
                <span>{item.daysLeft} Days left</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="funds">
                <div>
                  <h4>Goal</h4>
                  <p>₦{item.goal.toLocaleString()}</p>
                </div>
                <div>
                  <h4>Raised</h4>
                  <p>₦{item.raised.toLocaleString()}</p>
                </div>
              </div>

              <ProgressBar>
                <div
                  className="progress"
                  style={{
                    width: `${(item.raised / item.goal) * 100}%`,
                  }}
                />
              </ProgressBar>

              <button>Donate Now</button>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default CampaignData;
