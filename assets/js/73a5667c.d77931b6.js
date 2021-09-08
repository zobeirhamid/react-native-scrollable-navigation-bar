"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[980],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,h=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return r?t.createElement(h,l(l({ref:n},u),{},{components:r})):t.createElement(h,l({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5862:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:4},c="Image Background",p={unversionedId:"examples/image-background",id:"examples/image-background",isDocsHomePage:!1,title:"Image Background",description:"To create an Image Background, you need to create a HeaderBackgroundComponent. It's pretty trivial, therefore following the example should be enough.",source:"@site/docs/examples/image-background.md",sourceDirName:"examples",slug:"/examples/image-background",permalink:"/react-native-scrollable-navigation-bar/examples/image-background",editUrl:"https://github.com/zobeirhamid/react-native-scrollable-navigation-bar/edit/master/docs/docs/examples/image-background.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Search Bar",permalink:"/react-native-scrollable-navigation-bar/examples/search-bar"},next:{title:"Icons",permalink:"/react-native-scrollable-navigation-bar/examples/icons"}},u=[{value:"Regular",id:"regular",children:[]},{value:"Parallax",id:"parallax",children:[]},{value:"Fade Out",id:"fade-out",children:[]},{value:"Scale",id:"scale",children:[]},{value:"Carousel",id:"carousel",children:[]},{value:"Handling StatusBar",id:"handling-statusbar",children:[]}],s={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"image-background"},"Image Background"),(0,o.kt)("p",null,"To create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Image Background"),", you need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"HeaderBackgroundComponent"),". It's pretty trivial, therefore following the example should be enough."),(0,o.kt)("h2",{id:"regular"},"Regular"),(0,o.kt)("p",null,"It's important to set ",(0,o.kt)("inlineCode",{parentName:"p"},"headerBackgroundColor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"transparent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <Image\n        source={{\n          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n        }}\n        style={{ width: 300, height: 300 }}\n      />\n    );\n  }\n\n  return (\n    <View style={{ height: 500, width: 300, margin: 'auto' }}>\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"parallax"},"Parallax"),(0,o.kt)("p",null,"Parallax effect is supported out of the box."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <Image\n        source={{\n          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n        }}\n        style={{ width: 300, height: 300 }}\n      />\n    );\n  }\n\n  return (\n    <View style={{ height: 500, width: 300, margin: 'auto' }}>\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n        parallax={0.5}\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"fade-out"},"Fade Out"),(0,o.kt)("p",null,"Fade Out effect is supported out of the box. Put attention that it fades out, therefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," of the container is the color it fades to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <Image\n        source={{\n          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n        }}\n        style={{ width: 300, height: 300 }}\n      />\n    );\n  }\n\n  return (\n    <View\n      style={{\n        height: 500,\n        width: 300,\n        margin: 'auto',\n        backgroundColor: 'beige',\n      }}\n    >\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n        backgroundColor={'white'}\n        fadeOut\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"scale"},"Scale"),(0,o.kt)("p",null,"Scaling effect is supported out of the box. This is only required for iOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <Image\n        source={{\n          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n        }}\n        style={{ width: 300, height: 300 }}\n      />\n    );\n  }\n\n  return (\n    <View\n      style={{\n        height: 500,\n        width: 300,\n        margin: 'auto',\n      }}\n    >\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n        scale={1.5}\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"carousel"},"Carousel"),(0,o.kt)("p",null,"It does not have to be a plain ",(0,o.kt)("inlineCode",{parentName:"p"},"Image"),", it can be anything, therefore we can also create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Carousel")," using a ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <ScrollView\n        horizontal\n        pagingEnabled\n        showsHorizontalScrollIndicator={false}\n      >\n        <Image\n          source={{\n            uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n          }}\n          style={{ width: 300, height: 300 }}\n        />\n        <Image\n          source={{\n            uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n          }}\n          style={{ width: 300, height: 300 }}\n        />\n      </ScrollView>\n    );\n  }\n\n  return (\n    <View style={{ height: 500, width: 300, margin: 'auto' }}>\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")),(0,o.kt)("h2",{id:"handling-statusbar"},"Handling StatusBar"),(0,o.kt)("p",null,"This is only for ",(0,o.kt)("inlineCode",{parentName:"p"},"native"),". When we reached the ",(0,o.kt)("inlineCode",{parentName:"p"},"transitionPoint")," the regular Navigation Bar will show up and with that often times a change of the Status Bar style is necessary. This can be achieved using the props ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeTransitionPoint")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"afterTransitionPoint")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { AppleStyle } from 'react-native-scrollable-navigation-bar';\nimport { StatusBar } from 'react-native';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example(props) {\n  function Placeholder(props) {\n    return (\n      <View style={{ height: 200, margin: 50, backgroundColor: 'grey' }} />\n    );\n  }\n\n  function HeaderBackgroundComponent(props) {\n    return (\n      <Image\n        source={{\n          uri: '/react-native-scrollable-navigation-bar/img/paris.jpg',\n        }}\n        style={{ width: 300, height: 300 }}\n      />\n    );\n  }\n\n  return (\n    <View style={{ height: 500, width: 300, margin: 'auto' }}>\n      <AppleStyle\n        headerHeight={300}\n        title={'Hello World'}\n        HeaderBackgroundComponent={HeaderBackgroundComponent}\n        headerBackgroundColor={'transparent'}\n        headerTitleColor={'white'}\n        beforeTransitionPoint={() => {\n          if (StatusBar.setBarStyle) {\n            StatusBar.setBarStyle('light-content');\n          }\n        }}\n        afterTransitionPoint={() => {\n          if (StatusBar.setBarStyle) {\n            StatusBar.setBarStyle('dark-content');\n          }\n        }}\n      >\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n        <Placeholder />\n      </AppleStyle>\n    </View>\n  );\n}\n")))}d.isMDXComponent=!0}}]);