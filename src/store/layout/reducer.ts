// @flow
import {LayoutTypes,LayoytState} from "./actionTypes"

//constants
import {
  layoutTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  layoutTheme,
  layoutPositions,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from "../../constants/layout";

export const INIT_STATE : LayoytState = {
  layoutType: layoutTypes.VERTICAL,
  layoutWidth: layoutWidthTypes.FLUID,
  leftSideBarTheme: leftSideBarThemeTypes.LIGHT,
  leftSideBarType: leftSidebarTypes.DEFAULT,
  layoutMode: layoutTheme.LIGHTMODE,
  topbarTheme: topBarThemeTypes.LIGHT,
  isPreloader: true,
  showRightSidebar: false,
  layoutPosition: layoutPositions.SCROLLABLE_FALSE,
  isMobile: false,
  showSidebar: true,
  leftMenu: false,
}

const Layout = (state = INIT_STATE, action :any) => {
  switch (action.type) {
    case LayoutTypes.CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      }
    case LayoutTypes.CHANGE_PRELOADER:
      return {
        ...state,
        isPreloader: action.payload,
      }

    case LayoutTypes.CHANGE_LAYOUT_WIDTH:
      return {
        ...state,
        layoutWidth: action.payload,
      }
    case LayoutTypes.CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSideBarTheme: action.payload,
      }
    case LayoutTypes.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      }
    case LayoutTypes.CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarTheme: action.payload,
      }
    case LayoutTypes.CHANGE_LAYOUT_POSITION:
      return {
        ...state,
        layoutPosition: action.payload,
      }
    case LayoutTypes.CHANGE_LAYOUT_THEME:
      return {
        ...state,
        layoutMode: action.payload.layoutMode,
      }
    case LayoutTypes.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: action.payload,
      }
    case LayoutTypes.SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      }
    case LayoutTypes.TOGGLE_LEFTMENU:
      return {
        ...state,
        leftMenu: action.payload,
      }

    default:
      return state
  }
}

export default Layout
