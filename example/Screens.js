// RegularNavigationBar
import RegularNavigationBar from './examples/Regular/RegularNavigationBar';
import CollapsibleRegularNavigationBar from './examples/Regular/CollapsibleRegularNavigationBar';
import StickyRegularNavigationBar from './examples/Regular/StickyRegularNavigationBar';
import StickyCollapsibleRegularNavigationBar from './examples/Regular/StickyCollapsibleRegularNavigationBar';
import CollapsibleStickyRegularNavigationBar from './examples/Regular/CollapsibleStickyRegularNavigationBar';
import StickyStayCollapsibleRegularNavigationBar from './examples/Regular/StickyStayCollapsibleRegularNavigationBar';
import SearchRegularNavigationBar from './examples/Regular/SearchRegularNavigationBar';

// TitleNavigationBar
import TitleNavigationBar from './examples/Title/TitleNavigationBar';
import StickyTitleNavigationBar from './examples/Title/StickyTitleNavigationBar';
import CollapsibleTitleNavigationBar from './examples/Title/CollapsibleTitleNavigationBar';
import SnapTitleNavigationBar from './examples/Title/SnapTitleNavigationBar';
import SearchTitleNavigationBar from './examples/Title/SearchTitleNavigationBar';
import StickyCollapsibleTitleNavigationBar from './examples/Title/StickyCollapsibleTitleNavigationBar';
import CollapsibleStickyTitleNavigationBar from './examples/Title/CollapsibleStickyTitleNavigationBar';
import StickyStayCollapsibleTitleNavigationBar from './examples/Title/StickyStayCollapsibleTitleNavigationBar';

// ImageTitleNavigationBar
import ImageNavigationBar from './examples/Title/Image/ImageNavigationBar';
import ParallaxImageNavigationBar from './examples/Title/Image/ParallaxImageNavigationBar';
import FadeOutImageNavigationBar from './examples/Title/Image/FadeOutImageNavigationBar';
import CarouselImageNavigationBar from './examples/Title/Image/CarouselImageNavigationBar';

const Screens = {
  Regular: {
    RegularNavigationBar,
    CollapsibleRegularNavigationBar,
    StickyRegularNavigationBar,
    StickyCollapsibleRegularNavigationBar,
    CollapsibleStickyRegularNavigationBar,
    StickyStayCollapsibleRegularNavigationBar,
    SearchRegularNavigationBar,
  },
  Title: {
    TitleNavigationBar,
    StickyTitleNavigationBar,
    CollapsibleTitleNavigationBar,
    SnapTitleNavigationBar,
    SearchTitleNavigationBar,
    StickyCollapsibleTitleNavigationBar,
    CollapsibleStickyTitleNavigationBar,
    StickyStayCollapsibleTitleNavigationBar,
  },
  Image: {
    ImageNavigationBar,
    ParallaxImageNavigationBar,
    FadeOutImageNavigationBar,
    CarouselImageNavigationBar,
  },
};

export default Screens;
