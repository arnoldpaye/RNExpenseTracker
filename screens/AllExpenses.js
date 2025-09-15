import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses } = expensesCtx;

  return <ExpensesOutput expenses={expenses} expensesPeriod={"Total"} />;
}
export default AllExpenses;
