import React, { useState, useEffect } from "react";
import app from "../base";
import { getBackendUrl } from "../utils";
import axios from "axios";
import { Spinner, Card, Button } from "react-bootstrap";
const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const backendUrl = getBackendUrl();

    axios.get(backendUrl).then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          app.auth().signOut();
        }}
      >
        Logout
      </button>
      <div>
        {articles.length === 0 ? (
          <Spinner />
        ) : (
          articles.map((a) => {
            console.log(a);
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={a.imageUrl} />
                <Card.Body>
                  <Card.Title>{a.title}</Card.Title>
                  <Card.Text>{a.description}</Card.Text>
                  <Button variant="primary">Edit</Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
