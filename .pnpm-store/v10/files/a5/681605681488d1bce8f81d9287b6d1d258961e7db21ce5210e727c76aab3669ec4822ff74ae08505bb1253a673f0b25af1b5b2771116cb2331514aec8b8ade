import { jsx, jsxs } from "react/jsx-runtime";
import { ThemeContext, useSite } from "@rspress/core/runtime";
import { IconMoon, IconSun, SvgWrapper } from "@rspress/core/theme";
import { useContext } from "react";
import "./global.css";
import "./index.css";
import { flushSync } from "react-dom";
const supportAppearanceTransition = ()=>'function' == typeof document?.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const removeClipViewTransition = ()=>{
    const styleDom = document.createElement('style');
    styleDom.innerHTML = `
      .rspress-doc {
        view-transition-name: none !important;
      }
  `;
    document.head.appendChild(styleDom);
    return ()=>{
        document.head.removeChild(styleDom);
    };
};
function SwitchAppearance({ onClick }) {
    const { theme, setTheme = ()=>{} } = useContext(ThemeContext);
    const { site } = useSite();
    const handleClick = (event)=>{
        const supported = supportAppearanceTransition();
        const enabled = site?.themeConfig?.enableAppearanceAnimation;
        const nextTheme = 'dark' === theme ? 'light' : 'dark';
        const isDark = 'dark' === nextTheme;
        if (supported && enabled) {
            const x = event.clientX;
            const y = event.clientY;
            const endRadius = Math.hypot(Math.max(x, innerWidth - x + 200), Math.max(y, innerHeight - y + 200));
            const dispose = removeClipViewTransition();
            const transition = document.startViewTransition(async ()=>{
                flushSync(()=>{
                    setTheme(nextTheme);
                    onClick?.();
                });
            });
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
            ];
            transition.ready.then(()=>{
                document.documentElement.animate({
                    clipPath: isDark ? [
                        ...clipPath
                    ].reverse() : clipPath
                }, {
                    duration: 400,
                    easing: 'ease-in',
                    pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
                    id: ''
                }).finished.then(()=>{
                    dispose();
                });
            });
        } else {
            setTheme(nextTheme);
            onClick?.();
        }
    };
    return /*#__PURE__*/ jsxs("div", {
        onClick: handleClick,
        className: "rp-switch-appearance",
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                className: "rp-switch-appearance__icon rp-switch-appearance__icon--sun",
                icon: IconSun,
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx(SvgWrapper, {
                className: "rp-switch-appearance__icon rp-switch-appearance__icon--moon",
                icon: IconMoon,
                fill: "currentColor"
            })
        ]
    });
}
export { SwitchAppearance };
