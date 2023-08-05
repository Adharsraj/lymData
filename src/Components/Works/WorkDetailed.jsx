import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { worksData } from "../../assets/Data/data";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Brompton from "./WorksFeatured/Brompton";
import Mailchimp from "./WorksFeatured/Mailchimp";
import Montblanc from "./WorksFeatured/Montblanc";
import AlHubDemo from "./WorksFeatured/AlHubDemo";

const WorkDetailed = () => {
  const { id } = useParams();
  const selectedWork = worksData.find((o) => o.id === parseInt(id));
  const [colors, setColours] = useState("white");
  const [tcolors, settColours] = useState("black");

  useEffect(() => {
    if (selectedWork.id === 3) {
      setColours("black");
      settColours("white");
    }
  }, [colors]);

  return (
    <>
      <Navbar />
      {selectedWork && selectedWork.id === 1 && <AlHubDemo /> }
      {selectedWork && selectedWork.id === 2 && <Brompton />}
      {selectedWork && selectedWork.id === 3 && <Montblanc />}
      <div style={{ background: colors, color: tcolors }}>
        <Footer />
      </div>
    </>
  );
};

export default WorkDetailed;
