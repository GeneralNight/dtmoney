import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs'
import { DepositType } from './types';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website development',
          value: 950,
          type: DepositType.DEPOSIT,
          category: 'Freelance',
          createdAt: new Date('2023-01-07 14:37:00'),
        },
        {
          id: 2,
          title: 'Pizza',
          value: 125,
          type: DepositType.WITHDRAW,
          category: 'Food',
          createdAt: new Date('2023-01-28 20:37:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data)
    })

    this.delete('/transactions/:id', (schema, request) => {
      
      const transaction = schema.find('transaction',request.params.id)
      if(transaction) {
        transaction.destroy()
        return true
      }

      return false
      
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

