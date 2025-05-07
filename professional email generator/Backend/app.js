import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import routes from './routes/route.js';

const app = express();
const PORT = process.env.PORT || 3000;

config();

//app.set('view engine', 'ejs');
//app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api/v1', routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
