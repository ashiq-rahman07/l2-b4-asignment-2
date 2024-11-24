"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodOrderData = order_validation_1.default.parse(req.body);
        const result = yield order_service_1.OrderService.createOrder(zodOrderData);
        if (!result.success) {
            res.status(400).json({
                success: false,
                message: result.message,
            });
        }
        else {
            res.status(200).json({
                message: 'Order are created succesfully',
                status: true,
                data: result.data,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getAllOrders();
        res.status(200).json({
            message: 'Orders are retrieved succesfully',
            status: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderService.getTotalRevenue(req, res);
        res.status(200).json({
            success: true,
            message: 'Total revenue calculated successfully.',
            data: {
                totalRevenue,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to calculate total revenue.',
            error: error.message,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    getTotalRevenue,
};
