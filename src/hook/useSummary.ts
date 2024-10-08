import { useMemo } from 'react'
import { TransactionsContext } from '../context/TranscationContext'
import { useContextSelector } from 'use-context-selector'

interface resumeSummaryTransaction {
  income: number
  outcome: number
  total: number
}

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc: resumeSummaryTransaction, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      } as resumeSummaryTransaction,
    )
  }, [transactions])

  return summary
}
