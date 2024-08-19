import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  TransactionContainer,
  TransactionTable,
  PriceHighLight,
} from './styles'
import { SearchForm } from './components/SearchForm/index'
import { TransactionsContext } from '../../context/TranscationContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transaction() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && ' - '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={4} align="center">
                  Nenhum registro encontrado
                </td>
              </tr>
            )}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
