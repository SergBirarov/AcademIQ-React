import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import HomePage from '../../src/pages/HomePage';
import CoursePage from '../../src/pages/CoursePage';
import ListComponent from './ListComponent';

function TabPanel(props) {
  const { children, value, index, } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {<Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const students = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "school_Year": 2,
      "phone": "0541234567",
      "email": "john.doe@example.com",
      "picture_URL": "https://plus.unsplash.com/premium_photo-1678937609110-61b091b7e1ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      "address": "123 Main St, Cityville",
      "city_Code": 1,
      "enrollment": "2023-09-01"
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "school_Year": 3,
      "phone": "0529876543",
      "email": "jane.smith@example.com",
      "picture_URL": "https://images.unsplash.com/photo-1725714354941-02986971c66b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "address": "456 Oak Ave, Townville",
      "city_Code": 2,
      "enrollment": "2022-09-15"
    },
    {
      "id": 3,
      "firstName": "David",
      "lastName": "Wilson",
      "school_Year": 1,
      "phone": "0501234567",
      "email": "david.wilson@example.com",
      "picture_URL": "https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      "address": "789 Pine Lane, Villageville",
      "city_Code": 3,
      "enrollment": "2023-09-01"
    }
  ]

  const lectures = [
    {
      "id": 1,
      "firstName": "Alice",
      "lastName": "Johnson",
      "phone": "0541234567",
      "email": "alice.johnson@example.com",
      "academic_Degree": "Ph.D.",
      "start_Date": "2018-08-01",
      "address": "101 Elm Street, Cityville",
      "city_Code": 1
    },
    {
      "id": 2,
      "firstName": "Bob",
      "lastName": "Williams",
      "phone": "0529876543",
      "email": "bob.williams@example.com",
      "academic_Degree": "M.Sc.",
      "start_Date": "2020-01-15",
      "address": "202 Oak Avenue, Townville",
      "city_Code": 2
    },
    {
      "id": 3,
      "firstName": "Carol",
      "lastName": "Brown",
      "phone": "0501234567",
      "email": "carol.brown@example.com",
      "academic_Degree": "B.A.",
      "start_Date": "2022-05-20",
      "address": "303 Pine Lane, Villageville",
      "city_Code": 3
    }
  ]


  return (
    <Box sx={{}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            height: '100%',
            '.MuiTab-root': {
              fontSize: '24px',
              color: 'black',
            }
          }}
        >
          <Tab label="Students" />
          <Tab label="Lectures" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListComponent items={students} userType="Student" />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListComponent items={lectures} userType="Lecturer" />

      </TabPanel>
    </Box>
  );
}