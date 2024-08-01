import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContainer, TransactionTable, PriceHighLight } from './styles';
import { SearchForm } from './components/SearchForm/index';

export function Transaction() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>                    
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}