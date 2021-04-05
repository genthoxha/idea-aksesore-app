import React from "react";
import "./info.css";
import shakingHands from "../../../assets/images/shakingHands.png";
const Info = () => {
  return (
    <div className="container img-responsive">
      <div className="row ">
        <div className="col-12 ballina-slider">
          <div className="jumbotron">
            <h1 className="display-4">IDEA</h1>
            <p className="lead">
              Jepni shije prodhimeve tuaja me dorëzat UNIKE "idea" IDEA, sjall
              tek ju më të rejat në botën e mobilerisë. Dorëza dollapi me Polir
              profesional, elegante e të veçanta në stil, dhe me një cilësi të
              standartit të lartë.
            </p>
            <p>
              Transportin e bëjmë ne në gjithë Kosovën "gratis" Posedojmë të
              gjitha dimensionet.
            </p>
            <p className="lead">
              <a className="btn btn-info btn-lg" href="#" role="button">
                Info...
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row middle-content">
        <div className="col-md-6">
          <div className="jumbotron">
            <h1 className="display-4">IDEA</h1>
            <p className="lead">
              Jepni shije prodhimeve tuaja me dorëzat UNIKE "idea" IDEA, sjall
              tek ju më të rejat në botën e mobilerisë. Dorëza dollapi me Polir
              profesional, elegante e të veçanta në stil, dhe me një cilësi të
              standartit të lartë.
            </p>
            <p>
              Transportin e bëjmë ne në gjithë Kosovën "gratis" Posedojmë të
              gjitha dimensionet.
            </p>
            <p className="lead">
              <a className="btn btn-info btn-lg" href="#" role="button">
                Info...
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid rounded shaking-hands-img"
            src={shakingHands}
            alt={"shakingHands"}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
