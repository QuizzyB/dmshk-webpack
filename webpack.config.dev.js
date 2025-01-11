const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "development",
    devServer: {
        hot: true,
        port: 3000,
        open: true,
    },
    plugins: [
        new ESLintPlugin({
            files: "src/**/*.jsx",
        }),
    ],
});
