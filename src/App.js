import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Grid2 } from '@mui/material';
import Paper from '@mui/material/Paper';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const eggProductionData = [
  { month: 'Jan', eggs: 300 },
  { month: 'Feb', eggs: 400 },
  { month: 'Mar', eggs: 500 },
  { month: 'Apr', eggs: 700 },
  { month: 'May', eggs: 600 },
  { month: 'Jun', eggs: 800 },
];

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Chicken Farm Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            pt: 8,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
          >
            {/* Egg Production Chart */}
            <Grid2>
              container spacing={3}>
              <Grid2>
                item xs={12}
                md={8}
                lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    Egg Production
                  </Typography>
                  <ResponsiveContainer>
                    <LineChart
                      data={eggProductionData}
                      margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="eggs"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
