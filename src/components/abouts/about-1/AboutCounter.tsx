import Count from "../../../common/count";

 
 
interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
}

const counter_data: CounterItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "שנות ניסיון",
  },
  {
    value: 50,
    suffix: "+",
    label: "לקוחות מרוצים",
  },
  {
    value: 300,
    suffix: "%",
    label: "גידול ממוצע במכירות",
  },
  {
    value: 100,
    suffix: "%",
    label: "אמיתי",
  },
];




export default function AboutCounter() {
  return (
    <div className="wioncounter-area bg-heading">
      <div className="container">
        <div className="wioncounter-wraper pb-0">

           {counter_data.map((item, i) =>(
              <div key={i} className="wioncounter-box box2">
              <h2 className="wioncounter-item item2 d-inline-flex align-items-center">
                <span className="odometer d-inline-block" data-odometer-final="12">
                <Count number={item.value} text={item.suffix} />
                </span> 
              </h2>
              <div className="wioncounter-data">
                <p>{item.label}</p>
              </div>
            </div>
            ))}  
        </div>
      </div>
    </div>
  )
}
