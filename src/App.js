import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, People, ShowChart, Settings } from '@mui/icons-material';
import EggIcon from '@mui/icons-material/Egg';
import ChickensPage from './containers/ChickensPage';
import AnalyticsPage from './containers/AnalyticsPage';
import SettingsPage from './containers/SettingsPage';
import Dashboard from './containers/Dashboard';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <EggIcon sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
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
                  { text: 'Dashboard', icon: <Home />, path: '/' },
                  { text: 'Chickens', icon: <People />, path: '/chickens' },
                  {
                    text: 'Analytics',
                    icon: <ShowChart />,
                    path: '/analytics',
                  },
                  { text: 'Settings', icon: <Settings />, path: '/settings' },
                ].map((item, index) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.path}
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
            sx={{ flexGrow: 1, p: 3 }}
          >
            <Toolbar />
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/chickens"
                element={<ChickensPage />}
              />
              <Route
                path="/analytics"
                element={<AnalyticsPage />}
              />
              <Route
                path="/settings"
                element={<SettingsPage />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
