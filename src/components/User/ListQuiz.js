import { Card, Button } from "antd";
import { useEffect, useState } from "react";
import { getQuizByParticipant } from "../../services/apiServices";
import { useSelector } from "react-redux";
const ListQuiz = () => {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);
  const getQuizData = async () => {
    const res = await getQuizByParticipant();
    console.log(res);
    if (res && res.EC === 0) {
      setListCard(res.DT);
    } else {
      console.log(res.EM);
    }
  };
  return (
    <div
      className="list-card-quiz"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {listCard &&
        listCard.length > 0 &&
        listCard.map((item, index) => {
          return (
            <Card
              key={`${index}-quiz`}
              title={`Quiz ${index + 1}`}
              bordered={true}
              style={{
                width: 300,
              }}
            >
              <img
                style={{ width: "100%", height: 250 }}
                src={`data:image/jpeg;base64,${item.image}`}
                alt=""
              />
              <p>{item.description}</p>
              <div style={{ textAlign: "center" }}>
                <Button type="primary">Start Now</Button>
              </div>
            </Card>
          );
        })}

      {listCard && listCard.length === 0 && (
        <div>There are currently no exams... </div>
      )}
    </div>
  );
};

export default ListQuiz;
