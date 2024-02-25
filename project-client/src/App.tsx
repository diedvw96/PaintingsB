import { Button } from '@mui/material';

function App() {
  const bgUrl = process.env.PUBLIC_URL + '/images/app-background.png'
  return (
    <div style={{ backgroundImage: bgUrl}}>
      Hello world!
      {/* <img src={process.env.PUBLIC_URL + '/images/app-background.png'} alt="Example" /> */}
      <Button color="primary">Primary Button</Button>
    </div>
  );
}

export default App;
