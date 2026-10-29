import { jsx, jsxs } from "react/jsx-runtime";
import { Tab, Tabs, getCustomMDXComponent } from "@rspress/core/theme";
import { useMemo } from "react";
import { Bun } from "./icons/Bun.js";
import { Deno } from "./icons/Deno.js";
import { Npm } from "./icons/Npm.js";
import { Pnpm } from "./icons/Pnpm.js";
import { Yarn } from "./icons/Yarn.js";
const transformDenoPositional = (cmd)=>{
    const parts = cmd.split(' ');
    const subcommand = parts[1];
    const isRun = 'run' === subcommand;
    let transformedFirst = false;
    const transformed = parts.map((tok, idx)=>{
        if (idx >= 2 && !tok.startsWith('-') && !tok.includes(':') && !/^https?:/.test(tok)) {
            if (isRun && transformedFirst) return tok;
            transformedFirst = true;
            return `npm:${tok}`;
        }
        return tok;
    });
    return transformed.join(' ');
};
function normalizeCommand(command) {
    if (command.startsWith('yarn create')) return command.replace(/(yarn create [^\s]+)@latest/, '$1');
    if (command.startsWith('deno ')) {
        const transformedCmd = command.replace(/deno create\s+([^\s]+)/, 'deno init --npm $1');
        if (!transformedCmd.includes('install')) {
            if (transformedCmd.includes('--npm') || transformedCmd.includes('--jsr')) return transformedCmd;
            return transformDenoPositional(transformedCmd);
        }
    }
    if (!command?.includes('install')) return command;
    const pureCommand = command.split(' ').filter((item)=>!item.startsWith('-') && !item.startsWith('--')).join(' ');
    if ('yarn install' === pureCommand || 'pnpm install' === pureCommand || 'bun install' === pureCommand || 'deno install' === pureCommand) return command;
    const replaced = command.replace(/\binstall\b/, 'add');
    if (replaced.startsWith('deno ')) {
        if (replaced.includes('--npm') || replaced.includes('--jsr')) return replaced;
        return transformDenoPositional(replaced);
    }
    return replaced;
}
function splitTo2Parts(command) {
    const parts = command.split(' ');
    const firstPart = parts[0];
    const secondPart = command.slice(firstPart.length);
    return [
        firstPart,
        secondPart
    ];
}
function PackageManagerTabs({ command, exec, dlx, additionalTabs = [] }) {
    let commandInfo;
    const packageMangerToIcon = {
        npm: /*#__PURE__*/ jsx(Npm, {}),
        yarn: /*#__PURE__*/ jsx(Yarn, {}),
        pnpm: /*#__PURE__*/ jsx(Pnpm, {}),
        bun: /*#__PURE__*/ jsx(Bun, {}),
        deno: /*#__PURE__*/ jsx(Deno, {})
    };
    additionalTabs.forEach((tab)=>{
        packageMangerToIcon[tab.tool] = tab.icon;
    });
    const Pre = useMemo(()=>getCustomMDXComponent().pre, [
        getCustomMDXComponent
    ]);
    if ('string' == typeof command) {
        const getPrefix = (packageManager)=>{
            if (dlx) switch(packageManager){
                case 'npm':
                    return 'npx';
                case 'yarn':
                    return 'yarn dlx';
                case 'pnpm':
                    return 'pnpm dlx';
                case 'bun':
                    return 'bunx';
                case 'deno':
                    return 'deno run -A';
                default:
                    return packageManager;
            }
            if (!exec) return packageManager;
            switch(packageManager){
                case 'npm':
                    return 'npx';
                case 'yarn':
                    return 'yarn';
                case 'pnpm':
                    return 'pnpm';
                case 'bun':
                    return 'bun';
                case 'deno':
                    return 'deno run -A';
                default:
                    return packageManager;
            }
        };
        commandInfo = {
            npm: `${getPrefix('npm')} ${command}`,
            yarn: `${getPrefix('yarn')} ${command}`,
            pnpm: `${getPrefix('pnpm')} ${command}`,
            bun: `${getPrefix('bun')} ${command}`,
            deno: `${getPrefix('deno')} ${command}`
        };
        additionalTabs.forEach((tab)=>{
            commandInfo[tab.tool] = `${tab.tool} ${command}`;
        });
        commandInfo.yarn = normalizeCommand(commandInfo.yarn);
        commandInfo.pnpm = normalizeCommand(commandInfo.pnpm);
        commandInfo.bun = normalizeCommand(commandInfo.bun);
        commandInfo.deno = normalizeCommand(commandInfo.deno);
    } else commandInfo = command;
    if (process.env.__SSR_MD__) return Object.values(commandInfo).reduce((previous, current)=>{
        const [packageManager, command] = splitTo2Parts(current);
        return previous + `\n\`\`\`sh [${packageManager}]\n` + `${packageManager}${command}\n` + "```\n";
    }, '');
    return /*#__PURE__*/ jsx(Tabs, {
        groupId: "package.manager",
        values: Object.entries(commandInfo).map(([key])=>/*#__PURE__*/ jsxs("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 15
                },
                children: [
                    packageMangerToIcon[key],
                    /*#__PURE__*/ jsx("span", {
                        style: {
                            marginLeft: 6,
                            marginBottom: 2
                        },
                        children: key
                    })
                ]
            }, key)),
        children: Object.entries(commandInfo).map(([key, value])=>{
            const [packageManager, command] = splitTo2Parts(value);
            return /*#__PURE__*/ jsx(Tab, {
                children: /*#__PURE__*/ jsx(Pre, {
                    lang: "bash",
                    className: "shiki css-variables",
                    style: {
                        backgroundColor: 'var(--shiki-background)',
                        color: 'var(--shiki-foreground)'
                    },
                    children: /*#__PURE__*/ jsx("code", {
                        style: {
                            whiteSpace: 'pre'
                        },
                        children: /*#__PURE__*/ jsxs("span", {
                            className: "line",
                            children: [
                                /*#__PURE__*/ jsx("span", {
                                    style: {
                                        color: 'var(--shiki-token-function)'
                                    },
                                    children: packageManager
                                }),
                                /*#__PURE__*/ jsx("span", {
                                    style: {
                                        color: 'var(--shiki-token-string)'
                                    },
                                    children: command
                                })
                            ]
                        })
                    })
                })
            }, key);
        })
    });
}
export { PackageManagerTabs };
