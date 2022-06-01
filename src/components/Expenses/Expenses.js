import "./Expenses.css";

import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
// import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  console.log(selectedYear);

  const getExpenseFilterData = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === selectedYear * 1
  );

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0)
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       title={expense.title}
  //       amount={expense.amount}
  //     />
  //   ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          getFilterData={getExpenseFilterData}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
