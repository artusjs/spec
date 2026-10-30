let isDockerCached, cachedResult, canAccessPowerShellPromise, mountPoint, defaultMountPoint;
import node_process from "node:process";
import node_path from "node:path";
import { fileURLToPath } from "node:url";
import node_child_process, { execFile as external_node_child_process_execFile } from "node:child_process";
import promises, { constants } from "node:fs/promises";
import { promisify } from "node:util";
import node_os from "node:os";
import node_fs from "node:fs";
import { Buffer } from "node:buffer";
function hasDockerEnv() {
    try {
        return node_fs.statSync('/.dockerenv'), !0;
    } catch  {
        return !1;
    }
}
function hasDockerCGroup() {
    try {
        return node_fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    } catch  {
        return !1;
    }
}
function isDocker() {
    return void 0 === isDockerCached && (isDockerCached = hasDockerEnv() || hasDockerCGroup()), isDockerCached;
}
function isInsideContainer() {
    return void 0 === cachedResult && (cachedResult = (()=>{
        try {
            return node_fs.statSync('/run/.containerenv'), !0;
        } catch  {
            return !1;
        }
    })() || isDocker()), cachedResult;
}
let isWsl = ()=>{
    if ('linux' !== node_process.platform) return !1;
    if (node_os.release().toLowerCase().includes('microsoft')) return !isInsideContainer();
    try {
        if (node_fs.readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft')) return !isInsideContainer();
    } catch  {}
    return !!(node_fs.existsSync('/proc/sys/fs/binfmt_misc/WSLInterop') || node_fs.existsSync('/run/WSL')) && !isInsideContainer();
}, is_wsl = node_process.env.__IS_WSL_TEST__ ? isWsl : isWsl(), execFile = promisify(node_child_process.execFile), powerShellPath = ()=>`${node_process.env.SYSTEMROOT || node_process.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`, executePowerShell = async (command, options = {})=>{
    let { powerShellPath: psPath, ...execFileOptions } = options, encodedCommand = executePowerShell.encodeCommand(command);
    return execFile(psPath ?? powerShellPath(), [
        ...executePowerShell.argumentsPrefix,
        encodedCommand
    ], {
        encoding: 'utf8',
        ...execFileOptions
    });
};
function parseMountPointFromConfig(content) {
    for (let line of content.split('\n')){
        if (/^\s*#/.test(line)) continue;
        let match = /^\s*root\s*=\s*(?<mountPoint>"[^"]*"|'[^']*'|[^#]*)/.exec(line);
        if (match) return match.groups.mountPoint.trim().replaceAll(/^["']|["']$/g, '');
    }
}
executePowerShell.argumentsPrefix = [
    '-NoProfile',
    '-NonInteractive',
    '-ExecutionPolicy',
    'Bypass',
    '-EncodedCommand'
], executePowerShell.encodeCommand = (command)=>Buffer.from(command, 'utf16le').toString('base64'), executePowerShell.escapeArgument = (value)=>`'${String(value).replaceAll('\'', '\'\'')}'`;
let wsl_utils_execFile = promisify(node_child_process.execFile), wslDrivesMountPoint = (defaultMountPoint = '/mnt/', async function() {
    if (mountPoint) return mountPoint;
    let configFilePath = '/etc/wsl.conf', isConfigFileExists = !1;
    try {
        await promises.access(configFilePath, constants.F_OK), isConfigFileExists = !0;
    } catch  {}
    if (!isConfigFileExists) return defaultMountPoint;
    let parsedMountPoint = parseMountPointFromConfig(await promises.readFile(configFilePath, {
        encoding: 'utf8'
    }));
    return void 0 === parsedMountPoint ? defaultMountPoint : mountPoint = (mountPoint = parsedMountPoint).endsWith('/') ? mountPoint : `${mountPoint}/`;
}), powerShellPathFromWsl = async ()=>{
    let mountPoint = await wslDrivesMountPoint();
    return `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`;
}, wsl_utils_powerShellPath = is_wsl ? powerShellPathFromWsl : powerShellPath, wsl_utils_canAccessPowerShell = async ()=>canAccessPowerShellPromise ??= (async ()=>{
        try {
            let psPath = await wsl_utils_powerShellPath();
            return await promises.access(psPath, constants.X_OK), !0;
        } catch  {
            return !1;
        }
    })(), wslDefaultBrowser = async ()=>{
    let psPath = await wsl_utils_powerShellPath(), command = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`, { stdout } = await executePowerShell(command, {
        powerShellPath: psPath
    });
    return stdout.trim();
}, convertWslPathToWindows = async (path)=>{
    if (/^[a-z]+:\/\//i.test(path)) return path;
    try {
        let { stdout } = await wsl_utils_execFile('wslpath', [
            '-aw',
            path
        ], {
            encoding: 'utf8'
        });
        return stdout.trim();
    } catch  {
        return path;
    }
};
function defineLazyProperty(object, propertyName, valueGetter) {
    let define = (value)=>Object.defineProperty(object, propertyName, {
            value,
            enumerable: !0,
            writable: !0
        });
    return Object.defineProperty(object, propertyName, {
        configurable: !0,
        enumerable: !0,
        get () {
            let result = valueGetter();
            return define(result), result;
        },
        set (value) {
            define(value);
        }
    }), object;
}
let execFileAsync = promisify(external_node_child_process_execFile);
async function defaultBrowserId() {
    if ('darwin' !== node_process.platform) throw Error('macOS only');
    let { stdout } = await execFileAsync('defaults', [
        'read',
        'com.apple.LaunchServices/com.apple.launchservices.secure',
        'LSHandlers'
    ]), match = /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout), browserId = match?.groups.id ?? 'com.apple.Safari';
    return 'com.apple.safari' === browserId ? 'com.apple.Safari' : browserId;
}
let run_applescript_execFileAsync = promisify(external_node_child_process_execFile);
async function runAppleScript(script, { humanReadableOutput = !0, signal } = {}) {
    if ('darwin' !== node_process.platform) throw Error('macOS only');
    let execOptions = {};
    signal && (execOptions.signal = signal);
    let { stdout } = await run_applescript_execFileAsync("osascript", [
        '-e',
        script,
        humanReadableOutput ? [] : [
            '-ss'
        ]
    ], execOptions);
    return stdout.trim();
}
async function bundleName(bundleId) {
    return runAppleScript(`tell application "Finder" to set app_path to application file id "${bundleId}" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
let windows_execFileAsync = promisify(external_node_child_process_execFile), windowsBrowserProgIds = {
    MSEdgeHTM: {
        name: 'Edge',
        id: 'com.microsoft.edge'
    },
    MSEdgeBHTML: {
        name: 'Edge Beta',
        id: 'com.microsoft.edge.beta'
    },
    MSEdgeDHTML: {
        name: 'Edge Dev',
        id: 'com.microsoft.edge.dev'
    },
    AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
        name: 'Edge',
        id: 'com.microsoft.edge.old'
    },
    ChromeHTML: {
        name: 'Chrome',
        id: 'com.google.chrome'
    },
    ChromeBHTML: {
        name: 'Chrome Beta',
        id: 'com.google.chrome.beta'
    },
    ChromeDHTML: {
        name: 'Chrome Dev',
        id: 'com.google.chrome.dev'
    },
    ChromiumHTM: {
        name: 'Chromium',
        id: 'org.chromium.Chromium'
    },
    BraveHTML: {
        name: 'Brave',
        id: 'com.brave.Browser'
    },
    BraveBHTML: {
        name: 'Brave Beta',
        id: 'com.brave.Browser.beta'
    },
    BraveDHTML: {
        name: 'Brave Dev',
        id: 'com.brave.Browser.dev'
    },
    BraveSSHTM: {
        name: 'Brave Nightly',
        id: 'com.brave.Browser.nightly'
    },
    FirefoxURL: {
        name: 'Firefox',
        id: 'org.mozilla.firefox'
    },
    OperaStable: {
        name: 'Opera',
        id: 'com.operasoftware.Opera'
    },
    VivaldiHTM: {
        name: 'Vivaldi',
        id: 'com.vivaldi.Vivaldi'
    },
    'IE.HTTP': {
        name: 'Internet Explorer',
        id: 'com.microsoft.ie'
    }
}, _windowsBrowserProgIdMap = new Map(Object.entries(windowsBrowserProgIds));
class UnknownBrowserError extends Error {
}
async function defaultBrowser(_execFileAsync = windows_execFileAsync) {
    let { stdout } = await _execFileAsync('reg', [
        'QUERY',
        ' HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice',
        '/v',
        'ProgId'
    ]), match = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
    if (!match) throw new UnknownBrowserError(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
    let { id } = match.groups, dotIndex = id.lastIndexOf('.'), hyphenIndex = id.lastIndexOf('-'), baseIdByDot = -1 === dotIndex ? void 0 : id.slice(0, dotIndex), baseIdByHyphen = -1 === hyphenIndex ? void 0 : id.slice(0, hyphenIndex);
    return windowsBrowserProgIds[id] ?? windowsBrowserProgIds[baseIdByDot] ?? windowsBrowserProgIds[baseIdByHyphen] ?? {
        name: id,
        id
    };
}
let default_browser_execFileAsync = promisify(external_node_child_process_execFile);
async function default_browser_defaultBrowser() {
    if ('darwin' === node_process.platform) {
        let id = await defaultBrowserId();
        return {
            name: await bundleName(id),
            id
        };
    }
    if ('linux' === node_process.platform) {
        let { stdout } = await default_browser_execFileAsync('xdg-mime', [
            'query',
            'default',
            'x-scheme-handler/http'
        ]), id = stdout.trim();
        return {
            name: id.replace(/.desktop$/, '').replace('-', ' ').toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x)=>x.toUpperCase()),
            id
        };
    }
    if ('win32' === node_process.platform) return defaultBrowser();
    throw Error('Only macOS, Linux, and Windows are supported');
}
let isInSsh = !!(node_process.env.SSH_CONNECTION || node_process.env.SSH_CLIENT || node_process.env.SSH_TTY), fallbackAttemptSymbol = Symbol('fallbackAttempt'), open_dirname = import.meta.url ? node_path.dirname(fileURLToPath(import.meta.url)) : '', localXdgOpenPath = node_path.join(open_dirname, 'xdg-open'), { platform: platform, arch: arch } = node_process, tryEachApp = async (apps, opener)=>{
    if (0 === apps.length) return;
    let errors = [];
    for (let app of apps)try {
        return await opener(app);
    } catch (error) {
        errors.push(error);
    }
    throw AggregateError(errors, 'Failed to open in all supported apps');
}, baseOpen = async (options)=>{
    let command, isFallbackAttempt = !0 === (options = {
        wait: !1,
        background: !1,
        newInstance: !1,
        allowNonzeroExitCode: !1,
        ...options
    })[fallbackAttemptSymbol];
    if (delete options[fallbackAttemptSymbol], Array.isArray(options.app)) return tryEachApp(options.app, (singleApp)=>baseOpen({
            ...options,
            app: singleApp,
            [fallbackAttemptSymbol]: !0
        }));
    let { name: app, arguments: appArguments = [] } = options.app ?? {};
    if (appArguments = [
        ...appArguments
    ], Array.isArray(app)) return tryEachApp(app, (appName)=>baseOpen({
            ...options,
            app: {
                name: appName,
                arguments: appArguments
            },
            [fallbackAttemptSymbol]: !0
        }));
    if ('browser' === app || 'browserPrivate' === app) {
        let browser, ids = {
            'com.google.chrome': 'chrome',
            'google-chrome.desktop': 'chrome',
            'com.brave.browser': 'brave',
            'org.mozilla.firefox': 'firefox',
            'firefox.desktop': 'firefox',
            'com.microsoft.msedge': 'edge',
            'com.microsoft.edge': 'edge',
            'com.microsoft.edgemac': 'edge',
            'microsoft-edge.desktop': 'edge',
            'com.apple.safari': 'safari'
        };
        if (is_wsl) {
            let progId = await wslDefaultBrowser();
            browser = _windowsBrowserProgIdMap.get(progId) ?? {};
        } else browser = await default_browser_defaultBrowser();
        if (browser.id in ids) {
            let browserName = ids[browser.id.toLowerCase()];
            if ('browserPrivate' === app) {
                if ('safari' === browserName) throw Error('Safari doesn\'t support opening in private mode via command line');
                appArguments.push({
                    chrome: '--incognito',
                    brave: '--incognito',
                    firefox: '--private-window',
                    edge: '--inPrivate'
                }[browserName]);
            }
            return baseOpen({
                ...options,
                app: {
                    name: open_apps[browserName],
                    arguments: appArguments
                }
            });
        }
        throw Error(`${browser.name} is not supported as a default browser`);
    }
    let cliArguments = [], childProcessOptions = {}, shouldUseWindowsInWsl = !1;
    if (!is_wsl || isInsideContainer() || isInSsh || app || (shouldUseWindowsInWsl = await wsl_utils_canAccessPowerShell()), 'darwin' === platform) command = 'open', options.wait && cliArguments.push('--wait-apps'), options.background && cliArguments.push('--background'), options.newInstance && cliArguments.push('--new'), app && cliArguments.push('-a', app);
    else if ('win32' === platform || shouldUseWindowsInWsl) {
        command = await wsl_utils_powerShellPath(), cliArguments.push(...executePowerShell.argumentsPrefix), is_wsl || (childProcessOptions.windowsVerbatimArguments = !0), is_wsl && options.target && (options.target = await convertWslPathToWindows(options.target));
        let encodedArguments = [
            '$ProgressPreference = \'SilentlyContinue\';',
            'Start'
        ];
        options.wait && encodedArguments.push('-Wait'), app ? (encodedArguments.push(executePowerShell.escapeArgument(app)), options.target && appArguments.push(options.target)) : options.target && encodedArguments.push(executePowerShell.escapeArgument(options.target)), appArguments.length > 0 && encodedArguments.push('-ArgumentList', (appArguments = appArguments.map((argument)=>executePowerShell.escapeArgument(argument))).join(',')), options.target = executePowerShell.encodeCommand(encodedArguments.join(' ')), options.wait || (childProcessOptions.stdio = 'ignore');
    } else {
        if (app) command = app;
        else {
            let exeLocalXdgOpen = !1;
            try {
                await promises.access(localXdgOpenPath, constants.X_OK), exeLocalXdgOpen = !0;
            } catch  {}
            command = node_process.versions.electron ?? ('android' === platform || !open_dirname || '/' === open_dirname || !exeLocalXdgOpen) ? 'xdg-open' : localXdgOpenPath;
        }
        appArguments.length > 0 && cliArguments.push(...appArguments), options.wait || (childProcessOptions.stdio = 'ignore', childProcessOptions.detached = !0);
    }
    'darwin' === platform && appArguments.length > 0 && cliArguments.push('--args', ...appArguments), options.target && cliArguments.push(options.target);
    let subprocess = node_child_process.spawn(command, cliArguments, childProcessOptions);
    return options.wait ? new Promise((resolve, reject)=>{
        subprocess.once('error', reject), subprocess.once('close', (exitCode)=>{
            options.allowNonzeroExitCode || 0 === exitCode ? resolve(subprocess) : reject(Error(`Exited with code ${exitCode}`));
        });
    }) : isFallbackAttempt ? new Promise((resolve, reject)=>{
        subprocess.once('error', reject), subprocess.once('spawn', ()=>{
            subprocess.once('close', (exitCode)=>{
                (subprocess.off('error', reject), 0 !== exitCode) ? reject(Error(`Exited with code ${exitCode}`)) : (subprocess.unref(), resolve(subprocess));
            });
        });
    }) : (subprocess.unref(), new Promise((resolve, reject)=>{
        subprocess.once('error', reject), subprocess.once('spawn', ()=>{
            subprocess.off('error', reject), resolve(subprocess);
        });
    }));
};
function detectArchBinary(binary) {
    if ('string' == typeof binary || Array.isArray(binary)) return binary;
    let { [arch]: archBinary } = binary;
    if (!archBinary) throw Error(`${arch} is not supported`);
    return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl } = {}) {
    if (wsl && is_wsl) return detectArchBinary(wsl);
    if (!platformBinary) throw Error(`${platform} is not supported`);
    return detectArchBinary(platformBinary);
}
let open_apps = {
    browser: 'browser',
    browserPrivate: 'browserPrivate'
};
defineLazyProperty(open_apps, 'chrome', ()=>detectPlatformBinary({
        darwin: 'google chrome',
        win32: 'chrome',
        linux: [
            'google-chrome',
            'google-chrome-stable',
            'chromium',
            'chromium-browser'
        ]
    }, {
        wsl: {
            ia32: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
            x64: [
                '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
                '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe'
            ]
        }
    })), defineLazyProperty(open_apps, 'brave', ()=>detectPlatformBinary({
        darwin: 'brave browser',
        win32: 'brave',
        linux: [
            'brave-browser',
            'brave'
        ]
    }, {
        wsl: {
            ia32: '/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe',
            x64: [
                '/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
                '/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe'
            ]
        }
    })), defineLazyProperty(open_apps, 'firefox', ()=>detectPlatformBinary({
        darwin: 'firefox',
        win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
        linux: 'firefox'
    }, {
        wsl: '/mnt/c/Program Files/Mozilla Firefox/firefox.exe'
    })), defineLazyProperty(open_apps, 'edge', ()=>detectPlatformBinary({
        darwin: 'microsoft edge',
        win32: 'msedge',
        linux: [
            'microsoft-edge',
            'microsoft-edge-dev'
        ]
    }, {
        wsl: '/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
    })), defineLazyProperty(open_apps, 'safari', ()=>detectPlatformBinary({
        darwin: 'Safari'
    }));
export default ((target, options)=>{
    if ('string' != typeof target) throw TypeError('Expected a `target`');
    return baseOpen({
        ...options,
        target
    });
});
export { open_apps as apps };
