import { Icon } from "@iconify/react";
import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../Logo";
import ListFooter from "./ListFooter";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div
          className="d-flex mb-5 flex-column flex-xl-row"
          style={{ columnGap: "10rem" }}
        >
          <div>
            <Logo />
            <p className="font-mulish mt-4">
              Plan and book your perfect trip with <br /> expert advice, travel
              tips for vehicle <br /> information from us
            </p>
            <p className="mt-5">
              ©2020 Vehicle Rental Center. All rights reserved
            </p>
          </div>
          <ListFooter
            title={"Destination"}
            content={["Bali", "Yogyakarta", "Jakarta", "Kalimantan", "Malang"]}
          />
          <ListFooter
            title={"Vehicle"}
            content={["Bike", "Cars", "Motorbike", "Return Times", "FAQs"]}
          />
          <ListFooter
            title={"Interest"}
            content={[
              "Adventure Travel",
              "Art And Culture",
              "Wildlife And Nature",
              "Family Holidays",
              "Culinary Trip",
            ]}
          />
        </div>
        <hr />
        <div
          className="d-flex justify-content-center align-items-center"
          id="footer-socmed"
          style={{ columnGap: "1rem", paddingTop: "30px" }}
        >
          <div>
            <Icon icon={"akar-icons:twitter-fill"} width={25} height={25} />
          </div>
          <div>
            <Icon icon={"brandico:facebook"} width={25} height={25} />
          </div>
          <div>
            <Icon icon={"akar-icons:instagram-fill"} width={25} height={25} />
          </div>
          <div>
            <Icon icon={"akar-icons:linkedin-fill"} width={25} height={25} />
          </div>
          <div>
            <Icon icon={"akar-icons:youtube-fill"} width={25} height={25} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
