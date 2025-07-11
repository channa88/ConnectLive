import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuth from '../utils/withAuth';
import { Button, IconButton, TextField, Typography, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import '../App.css';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  const handleHistory = () => {
    navigate('/history');
  };

  return (
    <div className="homePageContainer">
      {/* Navbar */}
      <header className="navBar">
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Personal <span style={{ color: '#FF9839' }}>Meet</span>
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <IconButton onClick={handleHistory} title="History" style={{ color: 'white' }}>
            <RestoreIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: 'white' }}>History</Typography>

          <Button variant="outlined" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="meetContainer">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '4rem' }}>
          <section className="leftPanel" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: '500px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Providing Quality Video Call Just Like Quality Education
              </Typography>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Enter Meeting Code"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleJoinVideoCall}
                  disabled={!meetingCode.trim()}
                >
                  Join
                </Button>
              </div>
            </Paper>
          </section>

          <section className="rightPanel" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', textAlign: 'center' }}>
              <img 
                src="/logo3.png" 
                alt="Video Call Logo" 
                style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '20px' }} 
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default withAuth(HomeComponent);
