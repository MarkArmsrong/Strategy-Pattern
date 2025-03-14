import express, { Application } from 'express';
import { static as serveStaticFiles } from 'express';
import path, { join } from 'path';
import { Request, Response } from 'express';
import { Order } from './types/order/orderInterfaces'; // Adjust the path if needed
import { DiscountCoordinator } from './controllers/discountCoordinator';
import bodyParser from 'body-parser';
/* import routes from './routes'; // Assuming this is correctly typed
 */
const app: Application = express();
const port = 3000;

// Serve static files
app.use(serveStaticFiles(join(__dirname, '../public')));
app.use(serveStaticFiles(join(__dirname, '../public')));
// Serve static files from the "public" folder
app.use(express.static(join(__dirname, 'public')));
// Middleware to parse JSON request bodies
app.use(express.json());

// Load backend routes
/* app.use('/', routes); */

// Route to serve the index.html at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/config', (req, res) => {
    res.json({ port });
  });

  // Middleware to parse JSON request bodies
app.use(bodyParser.json());

 // Extending the express Request interface to include a user property
  declare global {
    namespace Express {
      interface Request {
        user?: { id: number; username: string };
      }
    }
  } 
  const logDiscountCalculation = (req: Request, res: Response, next: Function) => {
    const currentDate = new Date();
    const user = req.user ? { id: req.user.id, username: req.user.username } : { id: '1', username: 'Guest' };  // Simulate user (for demo purposes)
    console.log(`[${currentDate.toISOString()}] [Local Log] Discount Calculation Requested by: (ID: ${user.id}, Name: ${user.username})`);
    next();
  };

// API endpoint to trigger discount calculation
app.post('/calculate-discount', logDiscountCalculation,  (req: Request, res: Response) => {
  const order: Order = req.body.order;  

  // Log the entire Order object before passing it to DiscountCoordinator
  console.log('Order received:', JSON.stringify(`Order ID: ` + order.orderId + ` Total Price: `+ order.totalPrice, null, 2)); // Pretty-print the order for better readability


  const discountCoordinator = new DiscountCoordinator();
  const totalDiscount = discountCoordinator.calculateDiscount(order);

  res.json({ discount: totalDiscount });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});