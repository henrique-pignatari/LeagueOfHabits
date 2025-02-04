// import { useState } from 'react'
import './App.css';

function MonthCheckBox({ monthNumber }: { monthNumber: number }) {
  const week = Array.from({ length: 35 }, (_, index) => index + 1);
  const initialDate = new Date(2024, monthNumber).getDay();
  const finalDate = new Date(2024, monthNumber + 1, 0).getDate() + initialDate;

  return (
    <>
      <div className="month">
        {week.map((_, index) => {
          if (index < initialDate) {
            return (
              <>
                <input
                  title={'formatDate'}
                  className={'checkbox-hidden'}
                  type="checkbox"
                />
                {(index + 1) % 7 == 0 ? <br></br> : ' '}
              </>
            );
          } else if (index < finalDate) {
            return (
              <>
                <input
                  title={'formatDate'}
                  className="checkbox"
                  type="checkbox"
                />
                {(index + 1) % 7 == 0 ? <br></br> : ' '}
              </>
            );
          }
        })}
      </div>
    </>
  );
}

const RenderCheckBox = () => {
  const months = Array.from({ length: 12 }, (_, index) => index);

  return (
    <>
      <div className="checkbox-months">
        {months.map((month) => {
          return <MonthCheckBox monthNumber={month} />;
        })}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <RenderCheckBox />
    </>
  );
}

export default App;
