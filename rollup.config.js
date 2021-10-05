import styles from 'rollup-plugin-styles';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';
import pkg from './package.json'

const rollupConfig = {
    input: 'src/lib.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            strict: false
        }
    ],
    plugins: [
        image(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
            extensions: ['.js', '.svg'],
        }),
        styles(),
        builtins(),
        commonjs(),
        typescript(),
        dts(),
    ],
    external: ['react', 'react-dom']
};

export default rollupConfig;
