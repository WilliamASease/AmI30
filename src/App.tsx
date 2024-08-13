import "./App.css";
import { isMobile } from "react-device-detect";
import knownbirthdays from "./knownbirthdays.json";
import { useMemo, useState } from "react";
import { countSpecificDays } from "./lib";
type person = { name: string; mdy: [number, number, number] };
const birthdays = knownbirthdays as person[];

function App() {
  const [who, setWho] = useState<person>(birthdays[0]);
  const birthDate = useMemo(
    () => new Date(who.mdy[2], who.mdy[0] - 1, who.mdy[1]),
    [who.mdy]
  );
  const now = useMemo(() => new Date(), []);
  const turning30 = useMemo(
    () =>
      new Date(new Date(birthDate).setFullYear(birthDate.getFullYear() + 30)),
    [birthDate]
  );
  const till30 = useMemo(
    () => ({
      thirty: turning30 < now,
      days: countSpecificDays(now, turning30, "all"),
      wednesdays: countSpecificDays(now, turning30, [3]),
      weekendDays: countSpecificDays(now, turning30, [0, 6]),
      workdays: countSpecificDays(now, turning30, [1, 2, 3, 4, 5]),
      workHours: countSpecificDays(now, turning30, [1, 2, 3, 4, 5]) * 8,
    }),
    [now, turning30]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgrey",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "90%" : 1000,
          flexGrow: 1,
          backgroundColor: "white",
          marginLeft: isMobile ? 5 : undefined,
          marginRight: isMobile ? 5 : undefined,
          paddingLeft: 5,
          paddingRight: 5,
          height: "100%",
        }}
      >
        <div>
          <a href="williamasease.github.io">Back...</a>
        </div>
        <div style={{ margin: 10, display: "flex", flexDirection: "row" }}>
          {birthdays.map((person) => (
            <div style={{ margin: 5 }} onClick={() => setWho(person)}>
              {person.name}
            </div>
          ))}
        </div>
        <div>{`is ${who.name} 30?`}</div>
        {till30.thirty ? (
          <div>Yeah, 30.</div>
        ) : (
          <>
            <div>Not yet. There's still</div>
            <div>{`${till30.days} raw days.`}</div>
            <div>{`${till30.wednesdays} wednesdays.`}</div>
            <div>{`${till30.weekendDays} saturdays and sundays.`}</div>
            <div>{`${till30.workdays} workdays.`}</div>
            <div>{`${till30.workHours} working hours.`}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
