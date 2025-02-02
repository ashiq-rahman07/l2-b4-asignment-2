"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bike_route_1 = require("./app/modules/products/bike.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', bike_route_1.BikeRouter);
app.use('/api/orders', order_route_1.OrderRouter);
//Handle not found
app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Assignment 2 completed succesfully',
    });
});
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found.',
    });
    next();
});
exports.default = app;
