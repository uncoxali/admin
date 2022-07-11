import { LayoutTypes } from "./actionTypes";

export const changeLayout = (layout: any) => ({
  type: LayoutTypes.CHANGE_LAYOUT,
  payload: "horizontal",
});

export const changePreloader = (layout: any) => ({
  type: LayoutTypes.CHANGE_PRELOADER,
  payload: layout,
});

export const changeLayoutWidth = (width: any) => ({
  type: LayoutTypes.CHANGE_LAYOUT_WIDTH,
  payload: width,
});

export const changeSidebarTheme = (theme: any) => ({
  type: LayoutTypes.CHANGE_SIDEBAR_THEME,
  payload: theme,
});

export const changeSidebarType = (sidebarType: any) => {
  return {
    type: LayoutTypes.CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType },
  };
};

export const changeTopbarTheme = (topbarTheme: any) => ({
  type: LayoutTypes.CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
});

export const changelayoutMode = (layoutMode: any, layoutType: any) => ({
  type: LayoutTypes.CHANGE_LAYOUT_THEME,
  payload: { layoutMode, layoutType },
});

export const changeLayoutPosition = (layoutPosition: any) => ({
  type: LayoutTypes.CHANGE_LAYOUT_POSITION,
  payload: layoutPosition,
});

export const showRightSidebarAction = (isopen: any) => ({
  type: LayoutTypes.SHOW_RIGHT_SIDEBAR,
  payload: isopen,
});

export const showSidebar = (isopen: any) => ({
  type: LayoutTypes.SHOW_SIDEBAR,
  payload: isopen,
});

export const toggleLeftmenu = (isopen: any) => ({
  type: LayoutTypes.TOGGLE_LEFTMENU,
  payload: isopen,
});
