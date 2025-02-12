"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_route_1 = require("../modules/auth/auth.route");
const order_route_1 = require("../modules/orders/order.route");
const bike_route_1 = require("../modules/products/bike.route");
const user_route_1 = require("./../modules/user/user.route");
const express_1 = require("express");
const router = (0, express_1.Router)();
const moduleRoutes = [
    // {
    //   path: '/auth',
    //   route: UserRoutes,
    // },
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRouter,
    },
    {
        path: '/product',
        route: bike_route_1.BikeRouter,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
