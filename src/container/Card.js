import * as React from 'react';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
          >
            Dessert
          </DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat (g)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
);

export default MyComponent;