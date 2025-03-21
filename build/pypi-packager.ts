import * as fs from 'fs'
import path from 'path'
import * as semver from 'semver';

import { argvs, sanitizePackageName, mkdir, jsonFromFile, exchangeArgv, execSync, cp, capitalize, regexAll } from './utils';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


class pypi {

    exchange:string;
    exchangeConfigs:any;
    pypiApiSecret:any;
    rootDir:string = __dirname + `/../`;
    tempPyDir:string = this.rootDir + `/temp_pypi/`;

    constructor(exchange: string, pypiApiSecret: string) {
        this.exchange = exchange;
        this.exchangeConfigs = jsonFromFile(__dirname + `/global-configs.json`)['exchanges'];
        this.pypiApiSecret = pypiApiSecret;
        this.init(exchange);
    }

    init(exchange) {
        // create skeleton dirs
        mkdir (this.tempPyDir);
        mkdir (this.tempPyDir + '/tests/'); // just empty folder
        // copy python folder to temp dir
        const pypiPackageName = this.exchangeConfigs[exchange].__PYTHON_PACKAGE_NAME__;
        const pypiPackageNameSanitized = sanitizePackageName (pypiPackageName);
        const pkgDir = this.tempPyDir + '/src/' + pypiPackageNameSanitized;
        mkdir (pkgDir);
        cp (this.rootDir + `/${this.exchange}`, pkgDir);
        // copy readme
        cp (this.rootDir + `/README.md`, this.tempPyDir + '/README.md');
        // write pyproject.toml
        const verion = this.defineVersion ();
        fs.writeFileSync(this.tempPyDir + '/pyproject.toml', this.pyprojectTolmContent(pypiPackageNameSanitized, verion));
        this.pythonPackageBuild ();
    }

    pyprojectTolmContent(pypiPackageNameSanitized:string, newVersion: string) {
        const content = '' +
            `[build-system]\n` +
            `requires = ["hatchling"]\n` +
            `build-backend = "hatchling.build"\n` +
            `\n` + 
            `[tool.hatch.build.targets.sdist]\n` +
            `include = ["src/${this.exchange}"]\n` +
            `\n` +
            `[tool.hatch.build.targets.wheel]\n` +
            `packages = ["${this.exchange}"]\n` +
            `\n` +
            `[project]\n` +
            `name = "${pypiPackageNameSanitized}"\n` +
            `version = "` + newVersion + `"\n` +
            `authors = [\n` +
            `    { name="CCXT", email="info@ccxt.trade" },\n` +
            `]\n` +
            `description = "${this.exchange} crypto exchange api client"\n` +
            `readme = "README.md"\n` +
            `requires-python = ">=3.8"\n` +
            `classifiers = [\n` +
            `    "Programming Language :: Python :: 3",\n` +
            `    "Operating System :: OS Independent",\n` +
            `    "Intended Audience :: Developers",\n` +
            `    "Intended Audience :: Financial and Insurance Industry",\n` +
            `    "Intended Audience :: Information Technology",\n` +
            `    "Topic :: Software Development :: Build Tools",\n` +
            `    "Topic :: Office/Business :: Financial :: Investment",\n` +
            `    "License :: OSI Approved :: MIT License",\n` +
            `]\n` +
            `license = {text = "MIT"}\n` +
            `\n` +
            `[project.urls]\n` +
            `Homepage = "https://github.com/ccxt/ccxt"\n` +
            `Issues = "https://github.com/ccxt/ccxt"\n` +
            ''
        ;
        return content;
    }

    defineVersion () {
        const res = execSync(`pip index versions ` + this.exchangeConfigs[this.exchange].__PYTHON_PACKAGE_NAME__);
        const versions = res.toString().trim();
        const matches = versions.match(/\((\S+)\)/);
        // @ts-ignore
        const currentVersion = matches[1] || '0.0.1'; // if new package and not found
        const newVersion = semver.inc(currentVersion, 'patch');
        return newVersion;
    }

    pythonPackageBuild () {
        const res = execSync(`cd ${this.tempPyDir} && python -m build`);
        console.log(res.toString());
    }

}

// check if environment variabele exist
const pypiApiSecret = process.env.PYPI_API_SECRET_SP;
if (!pypiApiSecret) {
    console.error('Please set environment variable PYPI_API_SECRET_SP');
    process.exit(1);
}
new pypi(exchangeArgv, pypiApiSecret);
