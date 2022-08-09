import React from "react";
import Card from "../../common/Card";
import NavBar from "./NavBar";

const Feed = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-6 sm:px-0">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            brand="Toyota"
            title="Drive 4 All"
            category="Automotive"
            onClick={() => {
              console.log(`clicked`);
            }}
            isNew={true}
          />
          <Card
            brand="Toyota"
            title="Drive 4 All"
            category="Automotive"
            onClick={() => {
              console.log(`clicked`);
            }}
            isNew={true}
          />
          <Card
            brand="Toyota"
            title="Drive 4 All"
            category="Automotive"
            onClick={() => {
              console.log(`clicked`);
            }}
            isNew={true}
          />
          <Card
            brand="Toyota"
            title="Drive 4 All"
            category="Automotive"
            onClick={() => {
              console.log(`clicked`);
            }}
            isNew={true}
          />
          <Card
            brand="Toyota"
            title="Drive 4 All"
            category="Automotive"
            onClick={() => {
              console.log(`clicked`);
            }}
            isNew={true}
          />
        </div>
      </div>
    </>
  );
};

export default Feed;
