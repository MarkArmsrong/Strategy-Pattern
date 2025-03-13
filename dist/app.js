"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const path_1 = __importStar(require("path"));
const discountCoordinator_1 = require("./controllers/discountCoordinator");
/* import routes from './routes'; // Assuming this is correctly typed
 */
const app = (0, express_1.default)();
const port = 3000;
// Serve static files
app.use((0, express_2.static)((0, path_1.join)(__dirname, '../public')));
app.use((0, express_2.static)((0, path_1.join)(__dirname, '../public')));
// Serve static files from the "public" folder
app.use(express_1.default.static((0, path_1.join)(__dirname, 'public')));
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Load backend routes
/* app.use('/', routes); */
// Route to serve the index.html at the root
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.get('/config', (req, res) => {
    res.json({ port });
});
// API endpoint to trigger discount calculation
app.post('/calculate-discount', (req, res) => {
    const order = req.body.order;
    const discountCoordinator = new discountCoordinator_1.DiscountCoordinator();
    const totalDiscount = discountCoordinator.calculateDiscount(order);
    res.json({ discount: totalDiscount });
});
// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map