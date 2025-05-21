import { useState, useEffect } from "react";
import schedules from "../data/index.js";
import { Button, Card } from "react-bootstrap";

const ScheduleCard = () => {
  const [scheduleList] = useState(schedules);
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    console.log("Jadwal telah dimuat atau state berubah");
  }, [scheduleList]);
  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };

  const filteredSchedule = selectedDay
    ? scheduleList.filter((schedule) => schedule.day === selectedDay)
    : scheduleList;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="mb-4 mt-3">
        <Button variant="primary" onClick={() => handleDaySelection("Senin")}>
          Senin
        </Button>
        <Button variant="primary" onClick={() => handleDaySelection("Selasa")}>
          Selasa
        </Button>
        <Button variant="primary" onClick={() => handleDaySelection("Rabu")}>
          Rabu
        </Button>
        <Button variant="primary" onClick={() => handleDaySelection("Kamis")}>
          Kamis
        </Button>
        <Button variant="secondary" onClick={() => setSelectedDay("")}>
          Semua
        </Button>
      </div>

      {filteredSchedule.length > 0 ? (
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
          {filteredSchedule.map((schedule) => (
            <Card
              style={{
                width: "40rem",
                backgroundColor: schedule.backgroundColor,
              }}
              className="card mt-4"
              key={schedule.id}
            >
              <Card.Body>
                <Card.Title className="card-title">
                  <b>{schedule.day}</b>
                </Card.Title>
                <hr />
                <div className="card-subtitle text-muted">
                  <Card.Subtitle>{schedule.schedule1}</Card.Subtitle>
                </div>
                <div className="card-text mb-4  ">
                  <Card.Text>{schedule.time1}</Card.Text>
                </div>
                <div className=" text-muted ">
                  <Card.Subtitle>{schedule.schedule2}</Card.Subtitle>
                </div>
                <div className="card-text mb-4">
                  <Card.Text>{schedule.time2}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>Tidak ada jadwal untuk hari ini.</p>
      )}
    </div>
  );
};

export default ScheduleCard;
