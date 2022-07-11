import React, { useEffect, useState } from "react";

//actions
import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
  changelayoutMode,
  changeLayoutPosition,
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

//components
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: any;
}

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch();

  const {
    topbarTheme,
    layoutWidth,
    isPreloader,
    layoutType,
    layoutMode,
    layoutPosition,
  } = useSelector((state: any) => ({
    topbarTheme: state.Layout.topbarTheme,
    layoutWidth: state.Layout.layoutWidth,
    isPreloader: state.Layout.isPreloader,
    layoutType: state.Layout.layoutType,
    layoutMode: state.Layout.layoutMode,
    layoutPosition: state.Layout.layoutPosition,
  }));

  /*
  meta document title
  */
  // useEffect(() => {
  //   const title = props.location.pathname;
  //   let currentage = title.charAt(1).toUpperCase() + title.slice(2);

  //   document.title = currentage + " | Finestel - React Admin & Overview Template";
  // }, [props.location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (layoutMode) {
      dispatch(changelayoutMode(layoutMode, layoutType));
    }
  }, [layoutMode, dispatch]);
  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"));
  }, [dispatch]);

  useEffect(() => {
    const preloader: any = document.getElementById("preloader");
    const status: any = document.getElementById("status");

    if (isPreloader === true) {
      preloader.style.display = "block";
      status.style.display = "block";

      setTimeout(function () {
        preloader.style.display = "none";
        status.style.display = "none";
      }, 2500);
    } else {
      preloader.style.display = "none";
      status.style.display = "none";
    }
  }, [isPreloader]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [dispatch, topbarTheme]);

  useEffect(() => {
    if (layoutMode) {
      dispatch(changelayoutMode(layoutMode, layoutType));
    }
  }, [layoutMode, layoutType, dispatch]);

  useEffect(() => {
    if (layoutPosition) {
      dispatch(changeLayoutPosition(layoutPosition));
    }
  }, [dispatch, layoutPosition]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [dispatch, layoutWidth]);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  /*
call dark/light mode
*/
  const onChangeLayoutMode = (value: any) => {
    if (changelayoutMode) {
      dispatch(changelayoutMode(value, layoutType));
    }
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header onChangeLayoutMode={onChangeLayoutMode} />
        <Navbar menuOpen={openMenu} />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
