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
exports.BikeControllers = void 0;
const bike_service_1 = require("./bike.service");
const bike_validation_1 = __importDefault(require("./bike.validation"));
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeData = req.body;
        const zodBikeData = bike_validation_1.default.parse(bikeData);
        const result = yield bike_service_1.BikeServices.createBikeIntoDB(zodBikeData);
        res.status(200).json({
            message: 'Bike is created succesfully',
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
const getAllBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.BikeServices.getAllBikesFromDB();
        res.status(200).json({
            message: 'Bikes are retrieved succesfully',
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
const getSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield bike_service_1.BikeServices.getSingleBike(productId);
        res.status(200).json({
            message: 'Bike are retrieved succesfully',
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
const deleteBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield bike_service_1.BikeServices.deleteBikeFromDB(productId);
        res.status(200).json({
            message: 'Bike are delete succesfully',
            status: true,
            data: {},
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
const updateBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateBikeData = req.body;
        const result = yield bike_service_1.BikeServices.updateBikeFromDB(productId, updateBikeData);
        res.status(200).json({
            message: 'Bike are update succesfully',
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
exports.BikeControllers = {
    createBike,
    getAllBikes,
    getSingleBike,
    deleteBike,
    updateBike,
};
