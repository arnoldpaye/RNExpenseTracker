import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";

import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const { expenses, setExpenses } = expensesCtx;
  

  useEffect(() => {
    async function getExpenses() {
      const fetchedExpenses = await fetchExpenses();
      setExpenses(fetchedExpenses);
    }

    getExpenses();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date < today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
      fallBackText={"No expenses found in the last 7 days"}
    />
  );
}
export default RecentExpenses;
