var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/PaginationControl.js',
    output: {
        path: path.resolve('lib'),
        filename: 'PaginationControl.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
        'reactstrap': 'reactstrap',
        'prop-types': 'prop-types'
    }
}