import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { Home, People, ShowChart, Settings } from '@mui/icons-material';
import EggIcon from '@mui/icons-material/EggAlt';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const drawerWidth = 240;

const eggProductionData = [
  { month: 'Jan', eggs: 300 },
  { month: 'Feb', eggs: 400 },
  { month: 'Mar', eggs: 500 },
  { month: 'Apr', eggs: 700 },
  { month: 'May', eggs: 600 },
  { month: 'Jun', eggs: 800 },
];

const weightDistributionData = [
  { weight: '1-2 kg', count: 10 },
  { weight: '2-3 kg', count: 25 },
  { weight: '3-4 kg', count: 15 },
  { weight: '4-5 kg', count: 5 },
];

const feedConsumptionData = [
  { day: 'Mon', amount: 50 },
  { day: 'Tue', amount: 55 },
  { day: 'Wed', amount: 60 },
  { day: 'Thu', amount: 52 },
  { day: 'Fri', amount: 58 },
  { day: 'Sat', amount: 53 },
  { day: 'Sun', amount: 51 },
];

const healthStatusData = [
  { name: 'Healthy', value: 85 },
  { name: 'Sick', value: 10 },
  { name: 'Recovering', value: 5 },
];

const temperatureData = [
  { time: '00:00', temp: 20 },
  { time: '04:00', temp: 18 },
  { time: '08:00', temp: 22 },
  { time: '12:00', temp: 27 },
  { time: '16:00', temp: 25 },
  { time: '20:00', temp: 22 },
];

const waterConsumptionData = [
  { month: 'Jan', liters: 1000 },
  { month: 'Feb', liters: 1200 },
  { month: 'Mar', liters: 1100 },
  { month: 'Apr', liters: 1300 },
  { month: 'May', liters: 1500 },
  { month: 'Jun', liters: 1400 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function DashboardContent() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <EggIcon sx={{ mr: 2 }} />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Chicken Farm
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {[
                { text: 'Dashboard', icon: <Home /> },
                { text: 'Chickens', icon: <People /> },
                { text: 'Analytics', icon: <ShowChart /> },
                { text: 'Settings', icon: <Settings /> },
              ].map((item, index) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h1"
              sx={{ mb: 4 }}
            >
              Chicken Farm Dashboard
            </Typography>
            <Grid
              container
              spacing={3}
            >
              {/* Egg Production */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <LineChart data={eggProductionData}>
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
              </Grid>
              {/* Weight Distribution */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                    Weight Distribution
                  </Typography>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <BarChart data={weightDistributionData}>
                      <XAxis dataKey="weight" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="count"
                        fill="#82ca9d"
                      >
                        {weightDistributionData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              {/* Feed Consumption */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                    Feed Consumption
                  </Typography>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <BarChart data={feedConsumptionData}>
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="amount"
                        fill="#ffc658"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              {/* Health Status */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                    Health Status
                  </Typography>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <PieChart>
                      <Pie
                        data={healthStatusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {healthStatusData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              {/* Temperature */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                    Temperature
                  </Typography>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <LineChart data={temperatureData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#ff7300"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
              {/* Water Consumption */}
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
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
                    Water Consumption
                  </Typography>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <BarChart data={waterConsumptionData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="liters"
                        fill="#3b82f6"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
