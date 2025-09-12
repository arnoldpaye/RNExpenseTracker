import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-09-11"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-09-10"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2025-08-19"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2025-09-01"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-09-03"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
