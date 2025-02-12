"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const mongoose_1 = require("mongoose");
const bikeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    model: { type: String, required: true },
    category: {
        type: String,
        enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        required: true,
    },
    description: { type: String, required: true },
    bikeImg: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// Add a static method to the schema
//   bikeSchema.statics.BikedExists = async function (id: string): Promise<TBike | null> {
//     return await this.findById(id);
//   };
// Create the model
exports.Bike = (0, mongoose_1.model)('Bike', bikeSchema);
//   export default Bike;
