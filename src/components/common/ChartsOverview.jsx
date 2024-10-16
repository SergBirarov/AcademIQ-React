import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', //  Primary color
    },
    secondary: {
      main: '#ff9900', //  Secondary color (for the bars)
    },
  },
});

export default function BasicBars({ dataNames, dataGrades }) {
  if (dataNames == undefined || dataNames.length == 0 || dataGrades == undefined || dataGrades.length == 0) {
    dataNames = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6", "Button 7"]
    dataGrades = [100, 150, 170, 340, 200, 100, 150,]
  }

  return (
    <ThemeProvider theme={theme}>
      <BarChart
        sx={{
          maxWidth: '90vw', margin: '20px auto'
        }}
        xAxis={[{
          scaleType: 'band', data: dataNames
        }]}
        series={[
          {
            data: dataGrades,
            color: '#990099'
          }
        ]}
        width={90 * (dataGrades.length)}
        height={300}

      />
    </ThemeProvider>
  );
}