// import React from 'react'
import { Heading, Text, Button, ButtonGroup, Box } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <>
      <Heading mt={8} size="xl">
        Hi @User
      </Heading>

      <Box mt={8}>
        <Heading size="lg">Recent Activity</Heading>
        <Box mt={2}>
          <Text>
            <strong>Analyzed</strong> : sales_data.csv - 2 hours ago
          </Text>
          <Text>
            <strong>Generated Report</strong> : Q2 Analysis - 1 day ago
          </Text>
          <Text>
            <strong>Shared Dataset</strong> : marketing_data.csv - 3 days ago
          </Text>
        </Box>
      </Box>

      <Box mt={8}>
        <Heading size="lg">Your Progress</Heading>
        <Box mt={2}>
          <Text>
            <strong>Datasets Analyzed</strong> : 5/10
          </Text>
          <Text>
            <strong>Reports Created</strong> : 3/5
          </Text>
        </Box>
      </Box>

      <Text mt={8}>What do you want to do today ?</Text>
      <ButtonGroup mt={4}>
        <Button colorScheme="blue">Add new Data</Button>
        <Button colorScheme="yellow">Analyze your data</Button>
        <Button colorScheme="green">Create a report</Button>
      </ButtonGroup>
    </>
  );
};

export default DashboardPage;
