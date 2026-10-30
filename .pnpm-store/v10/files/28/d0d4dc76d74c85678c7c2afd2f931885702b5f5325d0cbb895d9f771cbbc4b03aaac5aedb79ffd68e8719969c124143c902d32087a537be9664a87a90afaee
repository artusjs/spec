import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { isDataUrl, isExternalUrl } from "@rspress/core/runtime";
import { Badge, IconDeprecated, IconExperimental, SvgWrapper, Tag } from "@rspress/core/theme";
import { useMemo } from "react";
const BADGE_TAGS = {
    tip: 'tip',
    info: 'info',
    warning: 'warning',
    danger: 'danger'
};
function parseCommonTagsArrayStr(tagStr) {
    const tags = tagStr.split(',').map((tag)=>tag.trim()).filter((tag)=>tag.length > 0);
    return tags;
}
const getTagType = (tag)=>{
    const normalizedTag = tag.trim();
    const isSvgTagString = normalizedTag.startsWith('<svg');
    const isPic = isExternalUrl(normalizedTag) || isDataUrl(normalizedTag);
    const tagsArray = parseCommonTagsArrayStr(normalizedTag);
    return {
        isSvgTagString,
        isPic,
        isTagsArray: tagsArray && tagsArray?.length > 1,
        tagsArray,
        normalizedTag
    };
};
const Tag_Tag = ({ tag })=>{
    if (!tag) return null;
    const { isPic, isTagsArray, isSvgTagString, normalizedTag, tagsArray } = useMemo(()=>getTagType(tag), [
        tag
    ]);
    if (isTagsArray) return /*#__PURE__*/ jsx(Fragment, {
        children: tagsArray?.map((tag, index)=>/*#__PURE__*/ jsx(Tag, {
                tag: tag
            }, `${tag}-${index}`))
    });
    if (isSvgTagString) return /*#__PURE__*/ jsx("div", {
        dangerouslySetInnerHTML: {
            __html: tag
        },
        style: {
            width: 20,
            marginRight: 4
        }
    });
    if (isPic) return /*#__PURE__*/ jsx("img", {
        src: tag
    });
    if ('experimental' === normalizedTag) return /*#__PURE__*/ jsxs(Badge, {
        type: "warning",
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconExperimental
            }),
            /*#__PURE__*/ jsx("span", {
                children: "experimental"
            })
        ]
    });
    if ('deprecated' === normalizedTag) return /*#__PURE__*/ jsxs(Badge, {
        type: "danger",
        children: [
            /*#__PURE__*/ jsx(SvgWrapper, {
                icon: IconDeprecated
            }),
            /*#__PURE__*/ jsx("span", {
                children: "deprecated"
            })
        ]
    });
    if ('new' === normalizedTag) return /*#__PURE__*/ jsx(Badge, {
        text: "new",
        type: "tip"
    });
    if (BADGE_TAGS[normalizedTag]) return /*#__PURE__*/ jsx(Badge, {
        text: normalizedTag,
        type: BADGE_TAGS[normalizedTag]
    });
    return /*#__PURE__*/ jsx(Badge, {
        text: normalizedTag,
        type: "info"
    });
};
export { Tag_Tag as Tag };
