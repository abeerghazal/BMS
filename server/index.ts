/* eslint-disable no-console */
import app from './app';
import sequelize from './database/config/connection';
import InseertBillsTask from './CronJobs';

const port = app.get('port') as number;

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      InseertBillsTask();
      // eslint-disable-next-line no-console
      console.log(`The Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Error on synchronizing db'));
