import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Col, Container, Row } from "reactstrap";

/** import Mini Widget data */
import WalletBalance from "./WalletBalance";
import InvestedOverview from "./InvestedOverview";
import MarketOverview from "./MarketOverview";
import Locations from "./Locations";
import Trading from "./Trading";
import Transactions from "./Transactions";
import RecentActivity from "./RecentActivity";
import NewSlider from "./NewSlider";
import Widgets from "./Widgets";
import { getOverviewApi } from "src/helpers/fakebackend_helper";
import { GetOverview } from "../interface/getOverview.interface";
import SpinnerLoader from "src/components/Ui/SpinnerLoading";
import LineBar from "../AllCharts/echart/linebarchart";
import OverviewDailyCount from "./Charts/OverviewDailyCount";
import OverviewDailyAmount from "./Charts/OverviewDailyAmount";
import OverviewDailyAmountCum from "./Charts/OverviewDailyAmountCum";
import OverviewDailyCountCum from "./Charts/OverviewDailyCountCum";

const Overview = () => {
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    const fetchGetOverview = async () => {
      try {
        const data = await getOverviewApi();
        if (data?.status == 200) {
          setData(data?.body);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetOverview();
  }, []);

  return (
    <React.Fragment>
      {data ? (
        <>
          <div className="page-content">
            <MetaTags>
              <title>Overview | Finestel</title>
            </MetaTags>
            <Container fluid>
              <Row>
                <Widgets data={data?.live_data} />
              </Row>

              <Row className="mt-5">
                <div id="mix-line-bar" className="e-chart">
                  <OverviewDailyCount data={data} />
                </div>
              </Row>
              <Row className="mt-5">
                <div id="mix-line-bar" className="e-chart">
                  <OverviewDailyAmount data={data} />
                </div>
              </Row>
              <Row className="mt-5">
                <div id="mix-line-bar" className="e-chart">
                  <OverviewDailyAmountCum data={data} />
                </div>
              </Row>
              <Row className="mt-5">
                <div id="mix-line-bar" className="e-chart">
                  <OverviewDailyCountCum data={data} />
                </div>
              </Row>

              {/* <Row>
            <WalletBalance />
            <Col>
              <Row>
                <InvestedOverview />
                <NewSlider />
              </Row>
            </Col>
          </Row>
          <Row>
            <MarketOverview />
            <Locations />
          </Row>
          <Row>
            <Trading />
            <Transactions />
            <RecentActivity />
          </Row> */}
            </Container>
          </div>
        </>
      ) : (
        <SpinnerLoader />
      )}
    </React.Fragment>
  );
};

export default Overview;
