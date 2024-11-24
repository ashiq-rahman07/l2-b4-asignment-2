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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const bike_model_1 = require("../products/bike.model");
const order_model_1 = require("./order.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product, quantity, totalPrice } = orderData;
    // Find the product
    const bike = yield bike_model_1.Bike.findById(product);
    if (!bike) {
        return { success: false, message: 'bike not found' };
    }
    // Check stock availability
    if (bike.quantity < quantity) {
        return { success: false, message: 'Insufficient stock available.' };
    }
    // Create the order
    const order = new order_model_1.Order({
        email,
        product: bike._id,
        quantity,
        totalPrice,
    });
    // Reduce the product quantity
    bike.quantity -= quantity;
    if (bike.quantity === 0) {
        bike.inStock = false;
    }
    // Save the updated product and order
    yield bike.save();
    const savedOrder = yield order.save();
    return { success: true, data: savedOrder };
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const getTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const totalRevenue = yield order_model_1.Order.aggregate([
            //stage-1
            {
                // Join orders with bikes to get bike details
                $lookup: {
                    from: 'bikes',
                    localField: 'product',
                    foreignField: '_id',
                    as: 'bikeDetails',
                },
            },
            //stage-2
            {
                // Unwind the bikeDetails array to simplify access
                $unwind: '$bikeDetails',
            },
            //stage-3
            {
                // Calculate total price for each order
                $addFields: {
                    orderRevenue: { $multiply: ['$bikeDetails.price', '$quantity'] },
                },
            },
            //stage-4
            {
                // Group to calculate total revenue
                $group: {
                    _id: null, // Group all documents together
                    totalRevenue: { $sum: '$orderRevenue' },
                },
            },
        ]);
        return ((_a = totalRevenue[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to calculate total revenue.',
            error: error.message,
        });
    }
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getTotalRevenue,
};
