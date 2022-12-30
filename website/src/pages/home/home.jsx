import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SmartBox from "../../components/smartBox/smartBox";
import TodoHandler from "../../controller";
import "./home.css";

const _todo = new TodoHandler();

const Home = () => {
  const [items, setItems] = useState([]);
  

  const getHandler = async () => {
    try {
      const res = await _todo.getItems();
      setItems(res);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (e, item) => {
    try {
      await _todo.deleteItem(e, item);
      // console.log(res)
      getHandler(e);
    } catch (error) {
      console.log(error);
    }
  };

  const addHandler = async (e) => {
    try {
      e.preventDefault(e);
      await _todo.additem(e);
      getHandler();
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHandler();
  }, []);
  return (
    <>
    <Container>
            <h1 className="text-light text-center p-4">
                Udacity Third Project 
            </h1>
        <Row>
            <Col className="d-flex f-col justify-content-center m-4">
            <button
        className="btn btn-primary text-center"
        onClick={(e) => addHandler(e)}
      >
        Create New Todo
      </button>
            </Col>
        </Row>
    </Container>
      <Container>
        <Row>
          {items[0]
            ? items.map((item) => {
                return (
                  <Col
                    className="d-flex f-col justify-content-center p-2"
                    key={item.id}
                  >
                    <SmartBox
                     item={item}
                     deleteHandler={deleteHandler}
                     getHandler={getHandler}
                     />
                  </Col>
                );
              })
            : "Your Todo List Is Empty"}
        </Row>
      </Container>
    </>
  );
};

export default Home;
