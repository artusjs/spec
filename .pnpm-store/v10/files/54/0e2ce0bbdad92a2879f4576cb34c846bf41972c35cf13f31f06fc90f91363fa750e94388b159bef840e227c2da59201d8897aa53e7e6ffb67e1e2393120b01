import react, { createContext } from "react";
import react_reconciler from "react-reconciler";
import { DefaultEventPriority, NoEventPriority } from "react-reconciler/constants.js";
class TextNode {
    text;
    parent;
    constructor(text){
        this.text = text;
    }
    setText(text) {
        this.text = text;
    }
}
class MarkdownNode {
    type;
    props;
    children;
    parent;
    constructor(type, props = {}){
        this.type = type;
        this.props = props;
        this.children = [];
    }
    appendChild(child) {
        this.children.push(child);
        if ('parent' in child) child.parent = this;
    }
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (-1 !== index) this.children.splice(index, 1);
    }
    insertBefore(child, beforeChild) {
        const index = this.children.indexOf(beforeChild);
        if (-1 !== index) this.children.splice(index, 0, child);
        else this.appendChild(child);
        if ('parent' in child) child.parent = this;
    }
}
let currentUpdatePriority = NoEventPriority;
const hostConfig = {
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    isPrimaryRenderer: false,
    getRootHostContext () {
        return {
            isInsideText: false
        };
    },
    getChildHostContext (parentHostContext, type) {
        const previousIsInsideText = parentHostContext.isInsideText;
        const isInsideText = 'text' === type || 'span' === type || previousIsInsideText;
        if (previousIsInsideText === isInsideText) return parentHostContext;
        return {
            isInsideText
        };
    },
    createInstance (type, props) {
        return new MarkdownNode(type, props);
    },
    createTextInstance (text) {
        return new TextNode(text);
    },
    shouldSetTextContent (_type, _props) {
        return false;
    },
    appendChild (parent, child) {
        parent.appendChild(child);
    },
    insertBefore (parent, child, beforeChild) {
        parent.insertBefore(child, beforeChild);
    },
    removeChild (parent, child) {
        parent.removeChild(child);
    },
    commitTextUpdate (textInstance, _oldText, newText) {
        textInstance.setText(newText);
    },
    commitUpdate (instance, _type, _oldProps, newProps, _internalHandle) {
        instance.props = newProps;
    },
    finalizeInitialChildren () {
        return false;
    },
    commitMount () {},
    clearContainer (container) {
        container.children = [];
    },
    setCurrentUpdatePriority (newPriority) {
        currentUpdatePriority = newPriority;
    },
    getCurrentUpdatePriority () {
        return currentUpdatePriority;
    },
    resolveUpdatePriority () {
        if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
        return DefaultEventPriority;
    },
    appendInitialChild (parent, child) {
        parent.appendChild(child);
    },
    preparePortalMount () {},
    resetTextContent () {},
    getPublicInstance (instance) {
        return instance;
    },
    prepareForCommit (_containerInfo) {
        return null;
    },
    resetAfterCommit (_containerInfo) {},
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    scheduleMicrotask: 'function' == typeof queueMicrotask ? queueMicrotask : (fn)=>Promise.resolve().then(fn),
    getInstanceFromNode () {
        return null;
    },
    beforeActiveInstanceBlur () {},
    afterActiveInstanceBlur () {},
    prepareScopeUpdate () {},
    getInstanceFromScope () {
        return null;
    },
    detachDeletedInstance () {},
    appendChildToContainer (container, child) {
        container.appendChild(child);
    },
    insertInContainerBefore (container, child, beforeChild) {
        container.insertBefore(child, beforeChild);
    },
    removeChildFromContainer (container, child) {
        container.removeChild(child);
    },
    hideInstance (_instance) {},
    hideTextInstance (textInstance) {
        textInstance.setText('');
    },
    unhideInstance (_instance) {},
    unhideTextInstance (textInstance, text) {
        textInstance.setText(text);
    },
    maySuspendCommit () {
        return false;
    },
    preloadInstance () {
        return true;
    },
    startSuspendingCommit () {},
    suspendInstance () {},
    waitForCommitToBeReady () {
        return null;
    },
    NotPendingTransition: null,
    HostTransitionContext: createContext(null),
    resetFormInstance () {},
    requestPostPaintCallback () {},
    shouldAttemptEagerTransition () {
        return false;
    },
    trackSchedulerEvent () {},
    resolveEventType () {
        return null;
    },
    resolveEventTimeStamp () {
        return -1.1;
    }
};
const reconciler = react_reconciler(hostConfig);
const ReactSharedInternals = react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function noop() {}
let interceptorRefCount = 0;
let originalDescriptor;
let realH = null;
let cachedTarget = null;
let cachedProxy = null;
function installEffectInterceptor() {
    if (!ReactSharedInternals) return noop;
    interceptorRefCount++;
    if (1 === interceptorRefCount) {
        originalDescriptor = Object.getOwnPropertyDescriptor(ReactSharedInternals, 'H');
        realH = ReactSharedInternals.H;
        cachedTarget = null;
        cachedProxy = null;
        Object.defineProperty(ReactSharedInternals, 'H', {
            get () {
                if (null == realH) return realH;
                if (cachedTarget !== realH) {
                    cachedTarget = realH;
                    cachedProxy = new Proxy(realH, {
                        get (target, prop, receiver) {
                            if ('useEffect' === prop || 'useLayoutEffect' === prop || 'useInsertionEffect' === prop) return noop;
                            return Reflect.get(target, prop, receiver);
                        }
                    });
                }
                return cachedProxy;
            },
            set (value) {
                realH = value;
            },
            configurable: true
        });
    }
    return ()=>{
        interceptorRefCount--;
        if (0 === interceptorRefCount) if (originalDescriptor) Object.defineProperty(ReactSharedInternals, 'H', originalDescriptor);
        else {
            ReactSharedInternals.H = void 0;
            ReactSharedInternals.H = realH;
        }
    };
}
function toMarkdown(root) {
    const { type, props, children } = root;
    const childrenMd = children.map((child)=>{
        if (child instanceof TextNode) return child.text;
        return toMarkdown(child);
    }).join('');
    switch(type){
        case 'root':
            return childrenMd;
        case 'h1':
            return `# ${childrenMd}\n\n`;
        case 'h2':
            return `## ${childrenMd}\n\n`;
        case 'h3':
            return `### ${childrenMd}\n\n`;
        case 'h4':
            return `#### ${childrenMd}\n\n`;
        case 'h5':
            return `##### ${childrenMd}\n\n`;
        case 'h6':
            return `###### ${childrenMd}\n\n`;
        case 'p':
            return `${childrenMd}\n\n`;
        case 'strong':
        case 'b':
            return `**${childrenMd}**`;
        case 'em':
        case 'i':
            return `*${childrenMd}*`;
        case 'code':
            if (root.parent?.type === 'pre') return childrenMd;
            return `\`${childrenMd}\``;
        case 'pre':
            {
                const _language = props['data-lang'] || props.language || props.lang || '';
                const language = 'string' == typeof _language ? _language : '';
                const title = props['data-title'] || '';
                const block = [
                    'markdown',
                    'mdx',
                    'md',
                    ''
                ].includes(language) ? '````' : '```';
                return `\n${block}${language}${title ? ` title=${title}` : ''}\n${childrenMd}\n${block}\n`;
            }
        case 'a':
            return `[${childrenMd}](${props.href || '#'})`;
        case 'img':
            return `![${props.alt || ''}](${props.src || ''})`;
        case 'ul':
            return `${childrenMd}\n`;
        case 'ol':
            return `${childrenMd}\n`;
        case 'li':
            {
                const isOrdered = root.parent && 'ol' === root.parent.type;
                const prefix = isOrdered ? '1. ' : '- ';
                return `${prefix}${childrenMd}\n`;
            }
        case 'blockquote':
            return `> ${childrenMd.split('\n').join('\n> ')}\n\n`;
        case 'br':
            return '\n';
        case 'hr':
            return '---\n\n';
        case 'table':
            return `${childrenMd}\n`;
        case 'thead':
            return childrenMd;
        case 'tbody':
            return childrenMd;
        case 'tr':
            {
                const cells = children.filter((child)=>child instanceof MarkdownNode).map((cell)=>toMarkdown(cell).trim());
                if (root.parent && 'thead' === root.parent.type) {
                    const separator = `|${cells.map(()=>' --- ').join('|')}|\n`;
                    return `| ${cells.join(' | ')} |\n${separator}`;
                }
                return `| ${cells.join(' | ')} |\n`;
            }
        case 'th':
        case 'td':
            return childrenMd;
        default:
            return childrenMd;
    }
}
async function renderToMarkdownString(element) {
    const container = new MarkdownNode('root');
    const root = reconciler.createContainer(container, 1, null, false, false, '', (error, info)=>{
        if (process.env.DEBUG) {
            console.error('Reconciler Error:', error, info);
            const message = `Reconciler Error:${error.message}`;
            throw new Error(message);
        }
    }, ()=>{}, (...args)=>{
        if (process.env.DEBUG) console.log('Reconciler onRecoverable Error:', ...args);
    }, ()=>{});
    const removeInterceptor = installEffectInterceptor();
    try {
        let resolveCommit = null;
        const commitPromise = new Promise((resolve)=>{
            resolveCommit = resolve;
        });
        reconciler.updateContainer(element, root, null, ()=>{
            if (resolveCommit) resolveCommit(toMarkdown(container));
        });
        return await commitPromise;
    } finally{
        removeInterceptor();
    }
}
export { renderToMarkdownString };
