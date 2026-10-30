const isSidebarDivider = (item)=>'dividerType' in item;
const isSidebarSingleFile = (item)=>!('items' in item) && 'link' in item;
const isSidebarSectionHeader = (item)=>'sectionHeaderText' in item;
const isSidebarGroup = (item)=>'items' in item && Array.isArray(item.items);
export { isSidebarDivider, isSidebarGroup, isSidebarSectionHeader, isSidebarSingleFile };
