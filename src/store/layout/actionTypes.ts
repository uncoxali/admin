/**
 * interface for Layout type
 */
export enum LayoutTypes {
    CHANGE_LAYOUT = '@@layout/CHANGE_LAYOUT',
    CHANGE_LAYOUT_WIDTH = "@@layout/CHANGE_LAYOUT_WIDTH",
    CHANGE_SIDEBAR_THEME = "@@layout/CHANGE_SIDEBAR_THEME",
    CHANGE_SIDEBAR_TYPE = "@@layout/CHANGE_SIDEBAR_TYPE",
    CHANGE_TOPBAR_THEME = "@@layout/CHANGE_TOPBAR_THEME",
    CHANGE_LAYOUT_THEME = "@@layout/CHANGE_LAYOUT_THEME",
    CHANGE_LAYOUT_POSITION = "@@layout/CHANGE_LAYOUT_POSITION",
    SHOW_SIDEBAR = "@@layout/SHOW_SIDEBAR",
    TOGGLE_LEFTMENU = "@@layout/TOGGLE_LEFTMENU",
    SHOW_RIGHT_SIDEBAR = "@@layout/SHOW_RIGHT_SIDEBAR",
    CHANGE_PRELOADER = "@@layout/CHANGE_PRELOADER",
}

export interface LayoytState {
layoutType  : string;
layoutWidth : string;
leftSideBarTheme : string;
leftSideBarType : any;
layoutMode : any;
layoutPosition : any;
topbarTheme : any;
isPreloader : boolean;
showRightSidebar : boolean;
isMobile : boolean;
showSidebar : boolean;
leftMenu : boolean;
}
