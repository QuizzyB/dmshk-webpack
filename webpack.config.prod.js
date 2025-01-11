const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "report.html",
            openAnalyzer: false,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /node_modules/,
                },
            },
        },
    },
});
